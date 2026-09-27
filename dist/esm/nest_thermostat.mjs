export const name="nest_thermostat";
export const id="dl_500ef5d77d68559d4934";
export const url=new URL("../icons/nest_thermostat.svg?v=eb515374ef6939f501417de37a5a3be6bd0d53d14c64b87c5f1f5c03486862f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
