export const name="square-user";
export const id="dl_5a753f51990f475b8320";
export const url=new URL("../icons/square-user.svg?v=24d9e9d66e2e4f1e44ced350c8529c0d84815ffd0573411d88149867248df9af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
