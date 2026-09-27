export const name="person_alert";
export const id="dl_121af7b20bc224d25811";
export const url=new URL("../icons/person_alert.svg?v=14408a39c9d20cd5ad61dffc77c8da4075009364a99aa06cd7b468604bf33d15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
