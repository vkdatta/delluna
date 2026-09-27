export const name="biohazard";
export const id="dl_a0d50eb0c8ee4a2cbdee";
export const url=new URL("../icons/biohazard.svg?v=ee57c13b8b9a0773c2949fa7e78d43676f88078ead5f8beba0b485777e8add49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
