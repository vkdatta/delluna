export const name="lucid_3-section";
export const id="dl_998096a1e24340e88360";
export const url=new URL("../icons/lucid_3-section.svg?v=6490077238cd27d07ed15243998df720893be16bc06d475699d54430b650336a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
