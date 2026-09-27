export const name="parachute-bold";
export const id="dl_829eabb4fb0f449eb7fb";
export const url=new URL("../icons/parachute-bold.svg?v=9f2629aa8c55fae12d40452af1e5fe2a28a383f667ff1d44f3943b3502abc5c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
