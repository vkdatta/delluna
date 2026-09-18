export const name="washoku";
export const id="dl_d138b0b1d7d44563a65d";
export const url=new URL("../icons/washoku.svg?v=513c0e34cd88004e6b71054ad5043f6a1ed1c51791b473fd16eb74d3c9826772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
