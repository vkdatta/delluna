export const name="chat-teardrop-text-duotone";
export const id="dl_e551a3399bdf463d849f";
export const url=new URL("../icons/chat-teardrop-text-duotone.svg?v=5ca1298a5cfd3fce81598b9c46dd634d562e664f826b354864e097f15019eb54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
