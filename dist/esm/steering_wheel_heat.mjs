export const name="steering_wheel_heat";
export const id="dl_55d7f03fbd8de77a135a";
export const url=new URL("../icons/steering_wheel_heat.svg?v=90467cf2beec42a8bc8eea414b9ddebbfcaf735d683b749d8b249785252cc995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
