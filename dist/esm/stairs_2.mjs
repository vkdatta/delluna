export const name="stairs_2";
export const id="dl_f1b4dbc467befb383705";
export const url=new URL("../icons/stairs_2.svg?v=97531821cbb61286568b5ef5633147b58d70eeca3b122a1b01d3f2c10c16f7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
