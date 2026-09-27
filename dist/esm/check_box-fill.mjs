export const name="check_box-fill";
export const id="dl_d215036b188b34b6d759";
export const url=new URL("../icons/check_box-fill.svg?v=7869a5729bd45e066603d14a9561eb6ff18699f8cfad921bc5dbccc6c2ff5f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
