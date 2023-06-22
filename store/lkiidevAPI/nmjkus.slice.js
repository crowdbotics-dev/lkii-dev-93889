import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_nmjku_list = createAsyncThunk(
  "nmjkus/api_v1_nmjku_list",
  async payload => {
    const response = await apiService.api_v1_nmjku_list(payload)
    return response.data
  }
)
export const api_v1_nmjku_create = createAsyncThunk(
  "nmjkus/api_v1_nmjku_create",
  async payload => {
    const response = await apiService.api_v1_nmjku_create(payload)
    return response.data
  }
)
export const api_v1_nmjku_retrieve = createAsyncThunk(
  "nmjkus/api_v1_nmjku_retrieve",
  async payload => {
    const response = await apiService.api_v1_nmjku_retrieve(payload)
    return response.data
  }
)
export const api_v1_nmjku_update = createAsyncThunk(
  "nmjkus/api_v1_nmjku_update",
  async payload => {
    const response = await apiService.api_v1_nmjku_update(payload)
    return response.data
  }
)
export const api_v1_nmjku_partial_update = createAsyncThunk(
  "nmjkus/api_v1_nmjku_partial_update",
  async payload => {
    const response = await apiService.api_v1_nmjku_partial_update(payload)
    return response.data
  }
)
export const api_v1_nmjku_destroy = createAsyncThunk(
  "nmjkus/api_v1_nmjku_destroy",
  async payload => {
    const response = await apiService.api_v1_nmjku_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const nmjkusSlice = createSlice({
  name: "nmjkus",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_nmjku_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nmjku_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nmjku_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nmjku_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nmjku_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nmjku_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nmjku_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_nmjku_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_nmjku_list,
  api_v1_nmjku_create,
  api_v1_nmjku_retrieve,
  api_v1_nmjku_update,
  api_v1_nmjku_partial_update,
  api_v1_nmjku_destroy,
  slice: nmjkusSlice
}
