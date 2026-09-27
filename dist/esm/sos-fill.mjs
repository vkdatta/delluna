export const name="sos-fill";
export const id="dl_92f3f102f9b15fb525b4";
export const url=new URL("../icons/sos-fill.svg?v=c589c9655c4725cfbef26be6cdd95153161656bb4b544e57a8a54ed453127fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
