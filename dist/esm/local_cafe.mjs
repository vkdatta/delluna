export const name="local_cafe";
export const id="dl_1743c5d96cbc120472ff";
export const url=new URL("../icons/local_cafe.svg?v=9b9cb8e1ac45d19af47ccf38fce7e1cf779b5cc65255e3a4bb32699bcba22b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
