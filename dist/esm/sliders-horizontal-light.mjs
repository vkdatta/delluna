export const name="sliders-horizontal-light";
export const id="dl_358f1ddfc76b0a5a1118";
export const url=new URL("../icons/sliders-horizontal-light.svg?v=588e6712ab43bdbb56e7eb53df00d84c6c719a6abc47318b659673f2264d491b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
