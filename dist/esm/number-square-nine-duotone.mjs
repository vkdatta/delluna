export const name="number-square-nine-duotone";
export const id="dl_e40b3dbd907348e09f0b";
export const url=new URL("../icons/number-square-nine-duotone.svg?v=411493b5b30e826e2f9c0f69f5c38f83fcd360644798aa08bee72bf55a91182c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
