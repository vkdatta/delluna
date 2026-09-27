export const name="file-arrow-down-thin";
export const id="dl_fbb7bef57fca4e0283d8";
export const url=new URL("../icons/file-arrow-down-thin.svg?v=7ee14b1bb6e6414f82a044b13521c87d5b30b8a61ce293b04f0dc44745be998f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
