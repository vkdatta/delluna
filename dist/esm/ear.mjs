export const name="ear";
export const id="dl_380f47db21ec46ba8f56";
export const url=new URL("../icons/ear.svg?v=b24f627dc1ae21b8ac991e6921f1ea85fff81052caa68c591ca75f3f4eb44a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
