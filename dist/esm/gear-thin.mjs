export const name="gear-thin";
export const id="dl_2d948715bf3a42889db2";
export const url=new URL("../icons/gear-thin.svg?v=3e57bdd449e2de1b24f589a266cd3811df136ca55e7c46e1434195b8b520d577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
