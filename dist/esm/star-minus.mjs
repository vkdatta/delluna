export const name="star-minus";
export const id="dl_2f6c318776704efc8630";
export const url=new URL("../icons/star-minus.svg?v=7ad7d315c086de1e1640704b8cec1e3cd333039d4b45c5054e2a4afad628fc08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
