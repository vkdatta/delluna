export const name="pint-glass-duotone";
export const id="dl_79cdb4ca31df4de095a4";
export const url=new URL("../icons/pint-glass-duotone.svg?v=09ae52b68f65507f650fb2cb613304566c96244bcc00ccd9ced02ea7c8347ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
