export const name="placeholder-fill";
export const id="dl_a1cfe2f71b4d48309253";
export const url=new URL("../icons/placeholder-fill.svg?v=7c9b6a85d64f62076c76141e4829caa846ec11432c5e3b2f6a210c4b5499aef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
