export const name="clover-thin";
export const id="dl_7a6e50e2bc3847ac8a22";
export const url=new URL("../icons/clover-thin.svg?v=8439e06f2844d42427abc42451cb1bd1f81bd8249ec3b28a9c90a6de4291e70f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
