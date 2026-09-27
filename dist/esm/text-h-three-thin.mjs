export const name="text-h-three-thin";
export const id="dl_dedfa46d0e66cb137b80";
export const url=new URL("../icons/text-h-three-thin.svg?v=3d3f3611d7ec9159e100ccd4d1d085a258e952ad5449c72d43b59270a5f1df24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
