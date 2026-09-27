export const name="person-simple-throw-light";
export const id="dl_8c3df8f0d2094f918979";
export const url=new URL("../icons/person-simple-throw-light.svg?v=326c4eead5bd4ba70475ffbcb9181069bbd87729b2422d9bc84b4a205c281db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
