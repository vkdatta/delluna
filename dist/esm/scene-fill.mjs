export const name="scene-fill";
export const id="dl_da8714e5e43a343076a6";
export const url=new URL("../icons/scene-fill.svg?v=ddf7df206785f16fc1209e1454bda4b4ba39f9db8e8abae8fd02efaae5f248c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
