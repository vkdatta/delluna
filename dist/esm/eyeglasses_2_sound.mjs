export const name="eyeglasses_2_sound";
export const id="dl_0e9560378f9e81df0f9d";
export const url=new URL("../icons/eyeglasses_2_sound.svg?v=06f635cada80927030b254ba1cac60aeb589f500e01404cc9ef5bbe72c987f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
