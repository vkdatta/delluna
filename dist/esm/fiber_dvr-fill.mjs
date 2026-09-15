export const name="fiber_dvr-fill";
export const id="dl_32d509f6f4b243cd9987";
export const url=new URL("../icons/F/fiber_dvr-fill.svg?v=b1b7cd0d0e7027ceee91d97c006ea4037e9c65094f037faffbdc61c42dc34cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
