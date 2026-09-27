export const name="remove_moderator-fill";
export const id="dl_4d6a3ccf2ea8fe266a42";
export const url=new URL("../icons/remove_moderator-fill.svg?v=3858154d5b8a6ce670bcf2cbd4bad5769143d18660d9b51224503b076a5d6c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
