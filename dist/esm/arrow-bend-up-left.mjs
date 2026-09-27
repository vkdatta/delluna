export const name="arrow-bend-up-left";
export const id="dl_0cfdef119b67401b9671";
export const url=new URL("../icons/arrow-bend-up-left.svg?v=3bc2ba398e15c493b9899fd7fe4843a19f81f69bf43b63f80674cc42001ef3df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
