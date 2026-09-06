export const name="ruler-thin";
export const id="dl_af74c520bc25402fa932";
export const url=new URL("../icons/ruler-thin.svg?v=1676683950bbb4bbba019ae019d1ac22a81f25134fcab8bf897d804ed2ab42f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
