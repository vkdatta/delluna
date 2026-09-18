export const name="shelves";
export const id="dl_2b240bc91692435abeaa";
export const url=new URL("../icons/shelves.svg?v=fb7388fdbc0c9f25f77b0e91920b3b507fe1d5b67246021f94e4c73ba6ff20b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
