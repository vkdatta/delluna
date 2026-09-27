export const name="stack-plus-bold";
export const id="dl_3a5c6b25633f65b62a18";
export const url=new URL("../icons/stack-plus-bold.svg?v=393f522100b2812608bd3847689f7feb71415535cf779fad0252a6fd497564ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
