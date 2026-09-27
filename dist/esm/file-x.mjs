export const name="file-x";
export const id="dl_2afdad43d99f4a3e8129";
export const url=new URL("../icons/file-x.svg?v=944f15c7196774729088a0a2fd020c69edf20fb85e42964dd14c5d684ce05495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
