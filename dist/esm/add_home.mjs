export const name="add_home";
export const id="dl_869e9ac601664a0aa9a4";
export const url=new URL("../icons/add_home.svg?v=406783ae30ca4beaa97f6a3386e078f3af13cd079b4cf952f61ac7783421ec3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
