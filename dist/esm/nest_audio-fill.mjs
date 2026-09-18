export const name="nest_audio-fill";
export const id="dl_a2ec57dca5a14cae9c28";
export const url=new URL("../icons/nest_audio-fill.svg?v=b73c81da30dccf428a0e35ee4c5e26d9732ee699e36332320c8875063661a2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
