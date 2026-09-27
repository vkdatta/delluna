export const name="lucid_3-minus";
export const id="dl_b489c283c5ee4ca58496";
export const url=new URL("../icons/lucid_3-minus.svg?v=e56166e78c1e044d73030bd922af059cb028e2bf8bade9da9592f252a70ae822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
