export const name="more_up";
export const id="dl_b1ac0348800e461794a8";
export const url=new URL("../icons/more_up.svg?v=ca9bceea7a724e7d2bd1377e8e2e0562df277e793a73b13fde7127a988abed77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
