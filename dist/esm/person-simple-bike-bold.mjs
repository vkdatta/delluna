export const name="person-simple-bike-bold";
export const id="dl_02a77758d2c54e76a525";
export const url=new URL("../icons/person-simple-bike-bold.svg?v=5fe2f8485b2f7107b83e72e9f105cac2b8b9c8cdf67a314f74d4554aa27e763e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
