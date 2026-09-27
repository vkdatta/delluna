export const name="weather_snowy-fill";
export const id="dl_ff4f4578aad060e177a0";
export const url=new URL("../icons/weather_snowy-fill.svg?v=336dc71932dbcec6e83e1ace495af9dc47bf2106a61f09db77e1290343ef92ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
