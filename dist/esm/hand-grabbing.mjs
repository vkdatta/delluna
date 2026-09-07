export const name="hand-grabbing";
export const id="dl_0c54039f560a4327ac5f";
export const url=new URL("../icons/hand-grabbing.svg?v=5c07fc19f6101a86c10cfa3cb4685c388cd0b89a69aa46caa92e44b5ba599977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
