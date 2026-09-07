export const name="user-circle-dashed-light";
export const id="dl_03f3b8fce1d74822bf2f";
export const url=new URL("../icons/U/user-circle-dashed-light.svg?v=7416cf9497bf73d0229619beb109f22ad24f5f994119aec86506285f01cb93ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
