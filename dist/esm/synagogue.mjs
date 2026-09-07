export const name="synagogue";
export const id="dl_fe83a98b37dd463d90ad";
export const url=new URL("../icons/S/synagogue.svg?v=665b89ead5dd73a1aa10e3400885d20066f1e976de72599fdf726e5ff3146de3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
