export const name="camera-slash-duotone";
export const id="dl_acac8b797e754aa3a5bd";
export const url=new URL("../icons/camera-slash-duotone.svg?v=ab7c27d0319fdfa11e285854833a0cda130ca5e9856c672c1886174fd57ceaf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
