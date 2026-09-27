export const name="desktop_cloud_stack";
export const id="dl_6d43676ed3970b1e2b0f";
export const url=new URL("../icons/desktop_cloud_stack.svg?v=7f78455985062c895972276fb2efb3d6b17025b965083679662744ae6d14be42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
