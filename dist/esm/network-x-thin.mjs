export const name="network-x-thin";
export const id="dl_c5350a06037747b29bfb";
export const url=new URL("../icons/network-x-thin.svg?v=2d0a797dff08781d5ffe548d094d704b349102d7b50abfaca5cb6be32a639d51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
