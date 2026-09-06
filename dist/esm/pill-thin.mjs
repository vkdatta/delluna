export const name="pill-thin";
export const id="dl_2e41fb7d17f848a0bd72";
export const url=new URL("../icons/pill-thin.svg?v=77d1759534e4b6ffa5029f921f921f0f69004318c094db34f18beb0e7edce5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
