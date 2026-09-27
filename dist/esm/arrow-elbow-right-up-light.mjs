export const name="arrow-elbow-right-up-light";
export const id="dl_01180db228314a519a0b";
export const url=new URL("../icons/arrow-elbow-right-up-light.svg?v=763949607f2cd2c641aec0c127d69bf783c9241f35a0c8d5296c1a90484b330e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
