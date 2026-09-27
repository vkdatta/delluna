export const name="filter_drama-fill";
export const id="dl_f1054f4dfd371d579afd";
export const url=new URL("../icons/filter_drama-fill.svg?v=a032aa1ea0489999947769e78f87afbed02bc4e0a5f9bc1f2e5febf78a7930b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
