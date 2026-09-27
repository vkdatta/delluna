export const name="list_alt_add-fill";
export const id="dl_8d40714e61065a38243b";
export const url=new URL("../icons/list_alt_add-fill.svg?v=48c99bdcb40aaf30e99de2d08f64d587c64ff31a84e70d6eef8cf91e426c3e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
