export const name="chat-fill";
export const id="dl_d2258cfdf6d3427a9529";
export const url=new URL("../icons/chat-fill.svg?v=945eea96e5f46475db44597d65bbd0a1bc01561c297c070b3d46a32e1e2a8154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
