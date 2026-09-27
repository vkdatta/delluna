export const name="car-simple";
export const id="dl_261453a4f2f74d1f8410";
export const url=new URL("../icons/car-simple.svg?v=62da70863522c95a72e83c56e1dd04e3020838265190bba5540de29ea417c6aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
