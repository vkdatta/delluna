export const name="raw_off-fill";
export const id="dl_6c59a3c034b4cec03838";
export const url=new URL("../icons/raw_off-fill.svg?v=75c42e3260ec5a451f59ddffa43de7670619f0e1534c6ea617551570b45724d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
