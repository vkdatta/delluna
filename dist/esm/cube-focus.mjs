export const name="cube-focus";
export const id="dl_4dabd53fa39f48b4b105";
export const url=new URL("../icons/cube-focus.svg?v=2492d9cd57457296a1c9ea86f22810e62e36b5bef6139ba838338ff348a67d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
