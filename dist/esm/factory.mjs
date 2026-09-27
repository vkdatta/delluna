export const name="factory";
export const id="dl_b9c435d1ec4e44d8985b";
export const url=new URL("../icons/factory.svg?v=b4392340804e0eea139af923808700779e4e086be920f91c763737fc0c32c9af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
