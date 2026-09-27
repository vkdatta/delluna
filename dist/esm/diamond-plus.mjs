export const name="diamond-plus";
export const id="dl_a04bfba5e3b70a084a51";
export const url=new URL("../icons/diamond-plus.svg?v=ea6e4f63b1d774b498bb0b0dcb536526cbf33921c6727d69bcf0f0bd436ece0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
