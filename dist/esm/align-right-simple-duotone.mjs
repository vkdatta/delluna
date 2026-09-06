export const name="align-right-simple-duotone";
export const id="dl_e393c5018af44edfa6eb";
export const url=new URL("../icons/align-right-simple-duotone.svg?v=65aacfbb91a2efcb9d03b96ce4714c060cdbccfe0d5453962db8e90bd176a12e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
