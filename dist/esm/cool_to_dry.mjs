export const name="cool_to_dry";
export const id="dl_906a0d25fadd95c5bc40";
export const url=new URL("../icons/cool_to_dry.svg?v=298c2596639937a28468f2321e94115051c2745e43c76d663c2b45c1c366f3b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
