export const name="layout-bold";
export const id="dl_dfa22b1e3d284cb8a174";
export const url=new URL("../icons/layout-bold.svg?v=7f69e8afea226b10693bf1b6e6c79b9bb5b69520b0a0f3d77652b3887f96ef26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
