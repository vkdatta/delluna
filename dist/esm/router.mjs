export const name="router";
export const id="dl_0396ef0a5fddf2c902a0";
export const url=new URL("../icons/router.svg?v=2662a50427c2fa35cbb8aaaae9f58ba98ed643631c00be6df764cc58875749be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
