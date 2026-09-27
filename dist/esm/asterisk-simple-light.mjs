export const name="asterisk-simple-light";
export const id="dl_8e3f9e1d04724a18a24f";
export const url=new URL("../icons/asterisk-simple-light.svg?v=dc81d79dcf06f682bacf8c86157e0c33f3a4983c4cb1086a327cf7bc74edaeea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
