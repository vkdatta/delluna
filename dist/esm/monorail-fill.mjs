export const name="monorail-fill";
export const id="dl_f2966299250392b033b5";
export const url=new URL("../icons/monorail-fill.svg?v=34d8f7dbdc862022c36eaa55fff302740b967b40a8e46abbc884b3632f645104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
