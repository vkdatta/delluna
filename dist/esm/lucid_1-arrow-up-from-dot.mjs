export const name="lucid_1-arrow-up-from-dot";
export const id="dl_02f1dafef01e44359a52";
export const url=new URL("../icons/lucid_1-arrow-up-from-dot.svg?v=cd42a3cb8888502bdd9bb3074d91f4906d6fb918cb4e15c9afe3f456d09b89ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
