export const name="lucid_1-chevron-left";
export const id="dl_119c47630100449f8401";
export const url=new URL("../icons/lucid_1-chevron-left.svg?v=fb5961514d7ab05eab1c44f5fa4fac1d8bb9a9253b2e4c82be9e03255fa894d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
