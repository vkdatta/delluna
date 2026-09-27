export const name="voice_over_off-fill";
export const id="dl_8a2666e58a41aeea3cf1";
export const url=new URL("../icons/voice_over_off-fill.svg?v=2c14c1b919f1d4bafcc07a5be333c4b3df8fd824175ad2a154ebbe7c6962e8bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
