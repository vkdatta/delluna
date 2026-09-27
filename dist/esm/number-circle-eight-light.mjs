export const name="number-circle-eight-light";
export const id="dl_0f45b3466e3b47269459";
export const url=new URL("../icons/number-circle-eight-light.svg?v=f156994d47a97c7ffca5aa555cb00a1ac6652fb9fd1ad909a8b46502e0e75627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
