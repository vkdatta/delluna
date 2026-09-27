export const name="divide-duotone";
export const id="dl_78bc51f527ed4cc6a4b7";
export const url=new URL("../icons/divide-duotone.svg?v=90ee4a474d2966d305aa614f24fd107740ec9dae7a2f54c9a0dcce86c8f22f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
