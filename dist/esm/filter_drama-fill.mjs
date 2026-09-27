export const name="filter_drama-fill";
export const id="dl_e0a8af5141da5445b504";
export const url=new URL("../icons/filter_drama-fill.svg?v=11752a4a1330548c0e1b8b488c60542ca95d0a099d2f2ba0ebe79a06bd4e5734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
