export const name="arrow-u-down-left";
export const id="dl_8e6fba00d6614d39a28b";
export const url=new URL("../icons/arrow-u-down-left.svg?v=273edb89343aa08756ae17621afdfab5db6d07873c0add88ce9e3d09a74f317c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
