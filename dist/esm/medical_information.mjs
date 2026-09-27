export const name="medical_information";
export const id="dl_e8b088ea3ee6ce9637f1";
export const url=new URL("../icons/medical_information.svg?v=88db8e8b2cb87440f79fed500853bc9d11770fd6fc0c73d782ac4773507d6ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
