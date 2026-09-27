export const name="stack-plus-duotone";
export const id="dl_d5b1170806ad39176697";
export const url=new URL("../icons/stack-plus-duotone.svg?v=c462269db4d4e563b5269ec1c2c8833676b00ea237740859504b1bc19c4f3e93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
