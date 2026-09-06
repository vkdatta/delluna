export const name="drop-half-light";
export const id="dl_e5ac5dedfc8f4dbc9a31";
export const url=new URL("../icons/drop-half-light.svg?v=c27468e54c545cba2c4aa35d9ad76f9d1becead340b0c61474266cfbd04a0c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
