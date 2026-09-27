export const name="car-simple-thin";
export const id="dl_5e50963350b841969335";
export const url=new URL("../icons/car-simple-thin.svg?v=2c328aecc26f21273cf972e75dacf1c6d5375301bbb9d51c0c6c991013925093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
