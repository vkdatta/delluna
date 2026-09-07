export const name="lucid_3-navigation-off";
export const id="dl_a324f7d832b04477b225";
export const url=new URL("../icons/lucid_3-navigation-off.svg?v=26cf8dac44f8a3ebd4fd93194499583c82195802740f64523479d70f93fede55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
