export const name="battery-warning-vertical-light";
export const id="dl_4a05a395f39840bcb445";
export const url=new URL("../icons/battery-warning-vertical-light.svg?v=46538189fea77337c1cf5e25bac549c1bb1dad59ad01e91be1ba9715ef7ee356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
