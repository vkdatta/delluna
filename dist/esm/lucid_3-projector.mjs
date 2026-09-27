export const name="lucid_3-projector";
export const id="dl_d6c54e8d283b46798170";
export const url=new URL("../icons/lucid_3-projector.svg?v=f582bcfd4fb04fdce2fb444231f2526e19210e5e1bb8f9ae2760c5b878e32c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
