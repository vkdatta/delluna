export const name="coffee-thin";
export const id="dl_e48c35d5161c456394b9";
export const url=new URL("../icons/coffee-thin.svg?v=1ff11ede533989704468485fe68d2de429253ffef80ca3d0f3bbc7899154959a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
