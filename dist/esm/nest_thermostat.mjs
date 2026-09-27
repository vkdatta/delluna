export const name="nest_thermostat";
export const id="dl_162674ecae776c670e32";
export const url=new URL("../icons/nest_thermostat.svg?v=93caf6ba8ded56508b7e88f8a4799e4ef8926af1bc6ea493d626fbe3ed9f1fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
