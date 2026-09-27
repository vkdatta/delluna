export const name="tent-thin";
export const id="dl_6a47ff6187d80f879a0b";
export const url=new URL("../icons/tent-thin.svg?v=3d1b653c922ee14a5a4f541e113d9d30f33ece1020a6d3980a51641938c01204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
