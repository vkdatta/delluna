export const name="spiral-light";
export const id="dl_e038931dfa0ed3d2f8f6";
export const url=new URL("../icons/spiral-light.svg?v=de24e1a523abb05a5d5ec245763f258fdacf5dca8fe4f0b0766e12bc8a576db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
