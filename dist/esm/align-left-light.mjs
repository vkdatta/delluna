export const name="align-left-light";
export const id="dl_6551c8876fda45fc90fb";
export const url=new URL("../icons/align-left-light.svg?v=1c131e92f562fd16f0db8b368c18e0cfce3a517177a1d6ce95a480144bed399f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
