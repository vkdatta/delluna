export const name="bus_alert";
export const id="dl_98b57311fdcb324cf9de";
export const url=new URL("../icons/bus_alert.svg?v=0449eb487053fabee0f0a51c17620645b099ef4c1d183a96106a9e16459a7713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
