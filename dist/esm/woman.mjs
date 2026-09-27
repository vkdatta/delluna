export const name="woman";
export const id="dl_b7cb48b1db8e90c183a6";
export const url=new URL("../icons/woman.svg?v=7b85feea6fb793aba0f3a040863356fde314d32444551ee03ef5df86e9661be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
