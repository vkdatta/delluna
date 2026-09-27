export const name="bluetooth-x";
export const id="dl_420b644c88e64b47bf06";
export const url=new URL("../icons/bluetooth-x.svg?v=32fd8c509f935a8400c5902ea5d1f11a03cecccdab81e5673bd084bfa322f0c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
