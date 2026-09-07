export const name="align-center-horizontal-light";
export const id="dl_1033c33f1e434927bcdd";
export const url=new URL("../icons/align-center-horizontal-light.svg?v=0ed8f6787880c0216e51d8faa0062c7339a82006226d8e70b99badcfdd4f462f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
