export const name="unsubscribe";
export const id="dl_935c3fc1e3a77da00e32";
export const url=new URL("../icons/unsubscribe.svg?v=3626c03ca85274e8dd0e006085ab446dc9cfe5b79920676cca7bbb8b1fc60d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
