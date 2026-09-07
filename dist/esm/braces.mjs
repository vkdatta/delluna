export const name="braces";
export const id="dl_9a861cbba889420b9daa";
export const url=new URL("../icons/braces.svg?v=13382062ef0975eb579b491c9f082f2c13c5053f2e8c589db2f05d1ecbec5b89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
