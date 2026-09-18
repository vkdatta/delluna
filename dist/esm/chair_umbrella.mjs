export const name="chair_umbrella";
export const id="dl_a2e74d7ad3ea4a478d9e";
export const url=new URL("../icons/chair_umbrella.svg?v=288f98bd40a2867f09a666168359f88b06697e9fe35188efe51742800cb4cfa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
