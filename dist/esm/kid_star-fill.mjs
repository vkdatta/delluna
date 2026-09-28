export const name="kid_star-fill";
export const id="dl_c2b7c1fd3baed7fc18c7";
export const url=new URL("../icons/kid_star-fill.svg?v=389d5fb2328d52e007414a3489039da40043cb382f3869aa35253751a5859037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
