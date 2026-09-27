export const name="align-left-light";
export const id="dl_6551c8876fda45fc90fb";
export const url=new URL("../icons/align-left-light.svg?v=780472b41e3bdf71ff467abeb08b46cb3db96556215e8bebeda86690428471fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
