export const name="cell-tower-duotone";
export const id="dl_de4a287bc9034807af25";
export const url=new URL("../icons/cell-tower-duotone.svg?v=3b935593fa168e811e90eeaec438453c56fe2060f67dfbf920b48b5fc18d87ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
