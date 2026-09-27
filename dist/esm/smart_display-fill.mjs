export const name="smart_display-fill";
export const id="dl_57709f259f49ea435df6";
export const url=new URL("../icons/smart_display-fill.svg?v=f2965e79c4e42f68001fa6c75ed5e128e9b0721bd17aef9b64735b4d116851ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
