export const name="background_replace";
export const id="dl_db5c60f332bfabfd5266";
export const url=new URL("../icons/background_replace.svg?v=014f027f93fe504f9ec53ce8d133432d8188726ba5014de15cbdea2c916fe977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
