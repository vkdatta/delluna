export const name="smiley-blank-bold";
export const id="dl_22ed25088b434649a116";
export const url=new URL("../icons/S/smiley-blank-bold.svg?v=3f53b3be5fc9b770978a2a13b2705e1b1b0c54e6aeee8751d2ce7632d4f6a7ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
