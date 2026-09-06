export const name="drop-half-fill";
export const id="dl_05a56e16598e4142ac63";
export const url=new URL("../icons/drop-half-fill.svg?v=63a87ec743f3608f326ff09904d289e36992b281148b87b25a346a739271d706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
