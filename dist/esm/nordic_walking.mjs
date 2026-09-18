export const name="nordic_walking";
export const id="dl_2ef4b585494645a7a374";
export const url=new URL("../icons/nordic_walking.svg?v=07a8de6751f7a9eebaf5f4667574fd24bf211d2ad039900c9daae9e9824e06f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
