export const name="arrow-square-up-bold";
export const id="dl_f7e70af0f0404ef1a8ea";
export const url=new URL("../icons/arrow-square-up-bold.svg?v=ad998874182e794206274937a8e43a9043b110a0cd5665998be5c54c7b00c07b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
