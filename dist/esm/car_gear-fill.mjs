export const name="car_gear-fill";
export const id="dl_73b8f8c42ddb4f2d93d0";
export const url=new URL("../icons/C/car_gear-fill.svg?v=bcc926c08f904cf38a67f119da00a9125edd74a50b6edc531e2bae176d3cb04b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
