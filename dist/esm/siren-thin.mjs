export const name="siren-thin";
export const id="dl_5e2a9c9b4d264be0a486";
export const url=new URL("../icons/S/siren-thin.svg?v=4d4c5c93a9b931eac86f646ea7402c54f22c259f32deb44f5fe304e4f3544aeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
