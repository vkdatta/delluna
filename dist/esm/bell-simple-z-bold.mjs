export const name="bell-simple-z-bold";
export const id="dl_f3853f54043d4d7dadb2";
export const url=new URL("../icons/bell-simple-z-bold.svg?v=dcdc889b46aa6a9b3e27c66693c3d9e12d84ec6ea03f7b416c20d13fb58325ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
