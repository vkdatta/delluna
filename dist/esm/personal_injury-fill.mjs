export const name="personal_injury-fill";
export const id="dl_6843774521cb7c45224f";
export const url=new URL("../icons/personal_injury-fill.svg?v=9cd17300eda2bfa48757e527f7c4f9cb72910e0928140e505f948b94063e0dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
