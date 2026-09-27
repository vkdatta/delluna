export const name="square-split-horizontal-light";
export const id="dl_029910aaf088419b268a";
export const url=new URL("../icons/square-split-horizontal-light.svg?v=7179adeb807a65a4d6deb731822354f78b33eb418da86e6a66e7be3bc7c20ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
