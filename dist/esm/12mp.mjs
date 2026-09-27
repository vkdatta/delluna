export const name="12mp";
export const id="dl_1b2e48344e89c3f8c1a5";
export const url=new URL("../icons/12mp.svg?v=aad5e1b9fdebecec9d0e66c1484b02086bb6f4a4a58cb5b8b6f080a55cd3911a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
