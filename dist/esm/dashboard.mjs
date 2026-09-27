export const name="dashboard";
export const id="dl_5b9f275f6348c733f118";
export const url=new URL("../icons/dashboard.svg?v=981d3acfd8b18a2ad242bfcbb4d8c495e725e7d84116396c47ef5d47644e2aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
