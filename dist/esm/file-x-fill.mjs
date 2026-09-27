export const name="file-x-fill";
export const id="dl_e66a773ad8de4063beb6";
export const url=new URL("../icons/file-x-fill.svg?v=3891059d87601b3e8671ba36a0f86b5337a0769e5f9941738d64d32f7e8bc307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
