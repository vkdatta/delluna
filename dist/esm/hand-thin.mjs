export const name="hand-thin";
export const id="dl_83ec0a2555ac4164a001";
export const url=new URL("../icons/hand-thin.svg?v=51ca978a9a7c17a9129a11bf6c3017542bff3e3d13d96e5caffeefc3ba1d52c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
