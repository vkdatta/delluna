export const name="frame_exclamation-fill";
export const id="dl_7f3c75050019ca6e506f";
export const url=new URL("../icons/frame_exclamation-fill.svg?v=fe8820e69610c182cbf32797e622050c9c3391552531d66d55ef138fa70ae1da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
