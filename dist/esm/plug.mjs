export const name="plug";
export const id="dl_0536a540d30a48cb8400";
export const url=new URL("../icons/plug.svg?v=513534dd9665042bfed73c669130a904a0ab17df06cc8c0e4a717721474839d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
