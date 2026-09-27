export const name="x_circle-fill";
export const id="dl_2c523e8d45dd8a0f2ed7";
export const url=new URL("../icons/x_circle-fill.svg?v=b8bdcb78bf5e3b77229a2068ac3f1623126d12f79566615962949131344d9355",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
