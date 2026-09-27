export const name="lock-open-bold";
export const id="dl_16e9f63487bc4a099307";
export const url=new URL("../icons/lock-open-bold.svg?v=8c81c3aeb988f0a9af40e196de1bb4f64c8d28026b42d8e215554a4fb2e8f2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
