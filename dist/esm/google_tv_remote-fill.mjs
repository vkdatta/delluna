export const name="google_tv_remote-fill";
export const id="dl_462996d8d7744c0cb3ba";
export const url=new URL("../icons/google_tv_remote-fill.svg?v=de344dec9921fed6150df1558b3629c4b83a4e88ef892bcf33926e0748ba4ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
