export const name="remove_moderator";
export const id="dl_78acf94e8562afb5a3ca";
export const url=new URL("../icons/remove_moderator.svg?v=04ada11fc22dec43040b3364bc68727a9446a34e00e355fe6ccdcb657ecdf2a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
