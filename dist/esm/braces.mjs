export const name="braces";
export const id="dl_9a861cbba889420b9daa";
export const url=new URL("../icons/braces.svg?v=d544a38766c948046915a8a566bd1ba0a52154f4a371e9ddc87ce8a5aadbc24a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
