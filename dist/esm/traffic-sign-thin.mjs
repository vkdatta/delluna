export const name="traffic-sign-thin";
export const id="dl_85d82ad7fa0a44418ef6";
export const url=new URL("../icons/T/traffic-sign-thin.svg?v=2bea9ee825d1c0366c621aac679f61ec5701fc2e9be00971270ced7c49fd5580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
