export const name="pinch-fill";
export const id="dl_4f9e07023f97b73c2fb8";
export const url=new URL("../icons/pinch-fill.svg?v=d648789a42e3a6978eb636af26daf9ddadd31fd99c10f1b88479a0c1175a8623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
