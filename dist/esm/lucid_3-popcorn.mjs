export const name="lucid_3-popcorn";
export const id="dl_44436830a5384b4d9c46";
export const url=new URL("../icons/lucid_3-popcorn.svg?v=bf4b7818e6dd171d014f300e3c416f9333e5d9c02e0a49f9e1dd5202745ffe02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
