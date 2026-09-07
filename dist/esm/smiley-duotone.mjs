export const name="smiley-duotone";
export const id="dl_6e9a91c00ed54ef9812a";
export const url=new URL("../icons/S/smiley-duotone.svg?v=b5e8638df688ea1832380e63c0b986f4a502ade6d51ea2f4552d0a9f5a796eac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
