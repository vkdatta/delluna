export const name="lucid_2-glass-water";
export const id="dl_f4b4ebe939d74985b05e";
export const url=new URL("../icons/lucid_2-glass-water.svg?v=989d383ef51f1950db3217742120ad7c652d97037fd2e29ae34f9e6428808b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
