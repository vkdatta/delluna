export const name="skip-back";
export const id="dl_33cb04ddf4a441b1a1bd";
export const url=new URL("../icons/S/skip-back.svg?v=20f318558e166d5dea09fb854a1bbc199e9891b17febed640e912a6ee4712d37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
