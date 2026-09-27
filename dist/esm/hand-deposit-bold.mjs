export const name="hand-deposit-bold";
export const id="dl_40c3d7502b1c4d80bff3";
export const url=new URL("../icons/hand-deposit-bold.svg?v=43196911a0d5138a54a843a9f5e1940a543ef38b8eb80db9c88a83ed8748a6db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
