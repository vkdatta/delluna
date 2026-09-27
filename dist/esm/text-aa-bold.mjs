export const name="text-aa-bold";
export const id="dl_585ded07079fcf84bb15";
export const url=new URL("../icons/text-aa-bold.svg?v=afa9f45b0dab61f019aa8125f0c061551b06e3345d27d6d721184dd711610455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
