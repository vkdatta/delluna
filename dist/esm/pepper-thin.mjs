export const name="pepper-thin";
export const id="dl_27c825e86d9e423b811d";
export const url=new URL("../icons/pepper-thin.svg?v=bfc61de0a5feb6dd749b71be5ea506116322726fef7b16bf87e6e2ba881ef68b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
