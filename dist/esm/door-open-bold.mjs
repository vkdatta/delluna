export const name="door-open-bold";
export const id="dl_25eea19baafe4265a4f8";
export const url=new URL("../icons/door-open-bold.svg?v=391800e47609db4e77a95a84f032a76ccf86efa8f840c5da1eff53f947ccc9ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
