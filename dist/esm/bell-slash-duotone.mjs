export const name="bell-slash-duotone";
export const id="dl_a08eed4203d64bc4810c";
export const url=new URL("../icons/bell-slash-duotone.svg?v=b2f26381697dd1c9d053b8f48895971852eab2c2b10a4699cbe2801a9dcce1e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
