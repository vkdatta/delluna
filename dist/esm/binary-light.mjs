export const name="binary-light";
export const id="dl_45bab05fbe564c06bbc0";
export const url=new URL("../icons/binary-light.svg?v=0ca3734e62a146de81218d37e0cf55bf31a29c10ad2c39e6b23b30529205880c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
