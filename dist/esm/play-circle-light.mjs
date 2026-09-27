export const name="play-circle-light";
export const id="dl_ed2f02adc15c41fdb3c4";
export const url=new URL("../icons/play-circle-light.svg?v=1f34fdb8acd7c485bf04433e85fd0bac9247b18d5c67826fb37be6de3cfbb589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
