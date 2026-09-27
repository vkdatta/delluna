export const name="piano-keys-light";
export const id="dl_48600ae8120c4a6bba6a";
export const url=new URL("../icons/piano-keys-light.svg?v=58b6a53ce2b971f7e25c8cde3eeeae71808eb34aeb8304bf95bb09095d843d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
