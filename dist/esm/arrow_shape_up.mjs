export const name="arrow_shape_up";
export const id="dl_4decb9d9c2dab3b30ecd";
export const url=new URL("../icons/arrow_shape_up.svg?v=a3bf9ddb0433eb9a6cfca6df49bf662fd308513e8566adee7f748407f3085d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
