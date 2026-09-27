export const name="close_small";
export const id="dl_3ea8578a76fb4864a936";
export const url=new URL("../icons/close_small.svg?v=203387fc428ba56260b18d18733e1affdc92eaadf27a8873cdd1299e42357e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
