export const name="group";
export const id="dl_7b72796c3183fab1d3dc";
export const url=new URL("../icons/group.svg?v=0fdc6ca4220071047aac77b0ed998001401e98e8d5feda3ea72d25afe78754e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
