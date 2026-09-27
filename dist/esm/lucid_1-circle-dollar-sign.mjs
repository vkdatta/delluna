export const name="lucid_1-circle-dollar-sign";
export const id="dl_ef1c0fcacdc94e969ca1";
export const url=new URL("../icons/lucid_1-circle-dollar-sign.svg?v=81a13eeeea23835b03859aa8751e59f7dce68501763ad8caa9f6e8041568728f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
