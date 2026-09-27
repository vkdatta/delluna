export const name="circle-dashed-fill";
export const id="dl_d4608073cb594363a679";
export const url=new URL("../icons/circle-dashed-fill.svg?v=4dcc9ce7b6036a68aab48d46a9cbae4201ddade8c8680c9bb9b7cda66190fc95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
