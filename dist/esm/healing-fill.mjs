export const name="healing-fill";
export const id="dl_286e9fb37ac6f46d7a4e";
export const url=new URL("../icons/healing-fill.svg?v=161249ea843cbbbe84deeb1ce3633fd29e6fb27c0d7945ab3fced2d2c0c3a4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
