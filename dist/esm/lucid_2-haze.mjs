export const name="lucid_2-haze";
export const id="dl_65cae4dd309e4965aa84";
export const url=new URL("../icons/lucid_2-haze.svg?v=13c7c74d1f3c04148e05ed1d48e3c36399edc206ce11a80ac18abecaad889f9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
