export const name="pi-thin";
export const id="dl_05e3820b83c7474695ab";
export const url=new URL("../icons/pi-thin.svg?v=740641342a2bb907d7544dcb56f40765d765726abfbdded97dbbfdac404e0e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
