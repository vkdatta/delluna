export const name="lucid_1-bookmark-x";
export const id="dl_b76297e049874418942d";
export const url=new URL("../icons/lucid_1-bookmark-x.svg?v=93d61711246fdbc8375a3a00e2d5268f14c85e3ec8ba7c160aad31ba154a00ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
