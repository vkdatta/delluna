export const name="warning-diamond-light";
export const id="dl_6a9555eeffaf690180a0";
export const url=new URL("../icons/warning-diamond-light.svg?v=5de636f20f4a353a8ab0e8567c3d957fc9bee03147abe8d0501532a7bf96fb1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
