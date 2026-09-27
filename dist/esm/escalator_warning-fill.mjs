export const name="escalator_warning-fill";
export const id="dl_10b29997ab20bec513af";
export const url=new URL("../icons/escalator_warning-fill.svg?v=09c5ed6246d419641e14d8cbe6e17187a251a54cc73fbd4c1001541ea38eb820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
