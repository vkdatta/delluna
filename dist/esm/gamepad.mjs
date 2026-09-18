export const name="gamepad";
export const id="dl_d91e70b6943a4e1383c1";
export const url=new URL("../icons/G/gamepad.svg?v=b3bd863005ebf2ab7ae4864abd2f5d210db3d200859737d66ffa9b00fc8a4681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
