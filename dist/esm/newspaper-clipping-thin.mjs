export const name="newspaper-clipping-thin";
export const id="dl_0ef3fb5ff0be4f1fbca5";
export const url=new URL("../icons/newspaper-clipping-thin.svg?v=e95a6d004b580510685f0c75833488fa1d9263b5bc1e880b65b4cd0c91257200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
