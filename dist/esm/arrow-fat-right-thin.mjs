export const name="arrow-fat-right-thin";
export const id="dl_b019fef98d674c0eab2d";
export const url=new URL("../icons/arrow-fat-right-thin.svg?v=c3fb50037ea76d1834fbf06326d34aec6e58aa1c45e8172c447328259a98e24e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
