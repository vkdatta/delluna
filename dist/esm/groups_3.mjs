export const name="groups_3";
export const id="dl_ba7daac58adfe2672a07";
export const url=new URL("../icons/groups_3.svg?v=d9046b91078d957c677ae23ce1afd0698bfeece06e891a67b7289119b007f451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
