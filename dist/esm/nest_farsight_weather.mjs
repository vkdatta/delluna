export const name="nest_farsight_weather";
export const id="dl_61afcd4d5cd588f11209";
export const url=new URL("../icons/nest_farsight_weather.svg?v=59519fe40553122172c92cab01648d6b31bb6bd2f1e9fbffb48b1297447c1fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
