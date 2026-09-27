export const name="file-minus-duotone";
export const id="dl_9733049a91cb460d8a06";
export const url=new URL("../icons/file-minus-duotone.svg?v=f9f4e01593512547d9c7cb8ae26eded55ff2cbb93507cca97576274ccab5cea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
