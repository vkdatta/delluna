export const name="lucid_3-navigation-off";
export const id="dl_a324f7d832b04477b225";
export const url=new URL("../icons/lucid_3-navigation-off.svg?v=a47f175b770f49a77cc082e129ecfdbcfa9421e71b369e7af699e42f156f2439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
