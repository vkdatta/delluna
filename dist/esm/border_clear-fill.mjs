export const name="border_clear-fill";
export const id="dl_efbfaf685591dff4967a";
export const url=new URL("../icons/border_clear-fill.svg?v=b9afd09d1b20ab030bd797efccc546513a4517e3b8ea50a391bc86c33e903a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
