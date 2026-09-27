export const name="file-css-fill";
export const id="dl_c3c0759d69134b7e98c4";
export const url=new URL("../icons/file-css-fill.svg?v=ac276ba77975d787567bbeb4d6e78717b80512a2981e9967856fade8d40a2690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
