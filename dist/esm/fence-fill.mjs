export const name="fence-fill";
export const id="dl_86cbb770457bff337cc5";
export const url=new URL("../icons/fence-fill.svg?v=cd31374f3b95d527081098dadcb87a9ed9a625041281e7d50bdff53035d96db6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
