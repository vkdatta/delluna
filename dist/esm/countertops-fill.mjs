export const name="countertops-fill";
export const id="dl_7239a1f27ae2419a8f3a";
export const url=new URL("../icons/C/countertops-fill.svg?v=cd297df8e43fe31aef1ce98ac8ad97a0fa7361ed8508b6a0163fb69a02497e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
