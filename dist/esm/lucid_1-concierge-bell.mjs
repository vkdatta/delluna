export const name="lucid_1-concierge-bell";
export const id="dl_3bf4ba50e86d4e6b839f";
export const url=new URL("../icons/lucid_1-concierge-bell.svg?v=ba8a2947087190499bd0a15a8ac1cc814be20e08df7098d78459f6a42b7f17aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
