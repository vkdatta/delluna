export const name="lucid_3-server-crash";
export const id="dl_e8641441c2104045917b";
export const url=new URL("../icons/lucid_3-server-crash.svg?v=a16ee9c7b0ba97ac2e66b9d66a3ef0c6e504680b9d53483a066a873ed2191b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
