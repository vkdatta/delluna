export const name="hand-peace-thin";
export const id="dl_2f7ad8b396734994a98f";
export const url=new URL("../icons/hand-peace-thin.svg?v=4f62abc4fbbe9a271dc82768424e5147cee5fe420c192e64ed20af09ef9d0acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
