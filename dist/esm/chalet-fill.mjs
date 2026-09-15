export const name="chalet-fill";
export const id="dl_2b5903ebb6f3440fa209";
export const url=new URL("../icons/C/chalet-fill.svg?v=f7cae36b6b301a2afac846ce3a3c591177bf74da25e40a15cba0407907422ab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
