export const name="pencil-line-bold";
export const id="dl_48c7988711bc4d8b98d7";
export const url=new URL("../icons/pencil-line-bold.svg?v=c5101c1b339c782cdb2b9a466fa426058ac1b795fd800507982f7115bdd3adb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
