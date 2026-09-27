export const name="archive-thin";
export const id="dl_18810073af82419f9bac";
export const url=new URL("../icons/archive-thin.svg?v=8656a2a016727d54d57b0853e4d234906c85c17646ad38785212fd3dda14eec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
