export const name="trail_length_short";
export const id="dl_568b2ec456d557ce3318";
export const url=new URL("../icons/trail_length_short.svg?v=201237f1e757e9fc867a1c9e87041f2e6a2131a5cc3f0513722d429819a0ab93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
