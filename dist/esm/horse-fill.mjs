export const name="horse-fill";
export const id="dl_7c4c843d0b8d42feb3c6";
export const url=new URL("../icons/horse-fill.svg?v=8150f7d7b832248915baba7dd4af60611bcd930f718846ab935469b6020aca51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
