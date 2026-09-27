export const name="handshake-bold";
export const id="dl_b62021f0f56b4321aef2";
export const url=new URL("../icons/handshake-bold.svg?v=9f4a4ac9c674791333f410ddc698c337b5dc2482a0dca42a1dede2462b2c601f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
