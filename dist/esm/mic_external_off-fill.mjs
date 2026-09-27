export const name="mic_external_off-fill";
export const id="dl_cfc8363d02b31b2952ce";
export const url=new URL("../icons/mic_external_off-fill.svg?v=86f9ca48fa4313a2707305efc726bfa320c4700a6f8d8d0c608117d41cd6ec77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
