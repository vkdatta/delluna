export const name="chalkboard-teacher-thin";
export const id="dl_98541d0999ee4903bc5c";
export const url=new URL("../icons/chalkboard-teacher-thin.svg?v=004f8c747f93faeb5c343f7e0e7522453065c99370c074e2cf9b18417347db41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
