export const name="square-half-bottom-bold";
export const id="dl_59658d8efa102617e1ce";
export const url=new URL("../icons/square-half-bottom-bold.svg?v=92b10ed14186a19e6df807fac250b8534c87c9238b8d8feb867083e2e7b957a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
