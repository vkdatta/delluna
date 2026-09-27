export const name="text-h-one";
export const id="dl_43b24dc24af9967fc974";
export const url=new URL("../icons/text-h-one.svg?v=92f07a988f2449e3b2b5c084ea9aa274721b537ba4e5821748de812b3cc2cf7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
