export const name="dine_lamp-fill";
export const id="dl_b636a5c9e983c4ba7e8b";
export const url=new URL("../icons/dine_lamp-fill.svg?v=8a2a588ffd639a2a2c9381c2ddb43028f8aa04a99758326f4eb80010250f1bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
