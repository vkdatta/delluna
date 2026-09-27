export const name="flag-checkered";
export const id="dl_2ef8d77a6eaf4fc09e89";
export const url=new URL("../icons/flag-checkered.svg?v=fdf06020c4d47b2e2010d52071ec71933e68805c53fa529b59a9aa903bb6403c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
