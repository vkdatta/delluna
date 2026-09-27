export const name="nearby_error-fill";
export const id="dl_1b9f5166e0501b6c992a";
export const url=new URL("../icons/nearby_error-fill.svg?v=80ed3273901331482fbb5e19299fcb4da7bec941f4029d12fb8e8d4b92051752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
