export const name="text-aa-duotone";
export const id="dl_517292b2d56b0e440f9b";
export const url=new URL("../icons/text-aa-duotone.svg?v=ae531acbdbea99de6ad3ebea8473ab148e76395395534b9ebdcc9c0ba24219c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
