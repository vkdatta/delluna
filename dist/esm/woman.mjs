export const name="woman";
export const id="dl_d741dbec55b440f7915c";
export const url=new URL("../icons/W/woman.svg?v=4795c7abbb9be80e5079ad785cc9e0915db4d01a9df54b8264bcd2e7093f1c31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
