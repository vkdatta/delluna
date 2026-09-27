export const name="projector-screen-light";
export const id="dl_9a413a38645349a689f1";
export const url=new URL("../icons/projector-screen-light.svg?v=96533b7ec68996ab17490a3ce1c992cb1fc9b7bba310844f41850523175f71ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
