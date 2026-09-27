export const name="lucid_1-cannabis-off";
export const id="dl_25219aace4ee45ac8e0e";
export const url=new URL("../icons/lucid_1-cannabis-off.svg?v=b9f1f2383d9254d28a00ece89292f30dad76e65698053cc8e9c8c12688373b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
