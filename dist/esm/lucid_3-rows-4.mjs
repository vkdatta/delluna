export const name="lucid_3-rows-4";
export const id="dl_edb70d14c1fb475f8250";
export const url=new URL("../icons/lucid_3-rows-4.svg?v=f1c306cc41de489ad1673b63420c9d3131502dc1bbff3086975dfa94fcd82045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
