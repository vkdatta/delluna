export const name="queue_play_next";
export const id="dl_27ad667a9543ab32b7fe";
export const url=new URL("../icons/queue_play_next.svg?v=7153aad7055f28bf3d68de56ae914e6f3ab2dec5d3b388bf42afbcafde74781f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
