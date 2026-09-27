export const name="auto_awesome_mosaic-fill";
export const id="dl_7c85d59c72ddcf11e3f8";
export const url=new URL("../icons/auto_awesome_mosaic-fill.svg?v=d506a161b61b3a4829947bab0f3f182116043b8cfa7b3f7eeb77f4bdcb32d7e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
