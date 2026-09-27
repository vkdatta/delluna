export const name="wb_twilight";
export const id="dl_a879d7da8d24c904c771";
export const url=new URL("../icons/wb_twilight.svg?v=c24af7f7f1134c76078513c4b71598392a9d90157ae26d2c1cfeede205c0b6da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
