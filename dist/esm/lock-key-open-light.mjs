export const name="lock-key-open-light";
export const id="dl_7625689f15294105ab2e";
export const url=new URL("../icons/lock-key-open-light.svg?v=853d83879c2dd0999132adc51369d7d180beedce28fbb73a4a149c4f871a7c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
