export const name="speaker-high-duotone";
export const id="dl_ad2e7527a4728ae2e78e";
export const url=new URL("../icons/speaker-high-duotone.svg?v=f617948f23ebd019bda81422f67344378aec2053d9d8a4bd57e0ed182f046ceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
