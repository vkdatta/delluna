export const name="pencil-circle-duotone";
export const id="dl_a59c2024b2b341349d4b";
export const url=new URL("../icons/pencil-circle-duotone.svg?v=84bfbbf063e36b7f467aecd2cef5b025a02d63eca3f4739412fdad85f3e861b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
