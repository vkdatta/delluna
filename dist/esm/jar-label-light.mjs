export const name="jar-label-light";
export const id="dl_63132691661c471994ca";
export const url=new URL("../icons/jar-label-light.svg?v=525260d764ee8cd3d9e5a8e4818d98a5329908f2fb7205ac0640cfea8fef8f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
