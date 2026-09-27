export const name="shutter_speed_add";
export const id="dl_9bf7d92ff95f2444248c";
export const url=new URL("../icons/shutter_speed_add.svg?v=dec628b17a1ea5103eb2178fa331c2992c74da50b28235aefc38e674005497e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
