export const name="join";
export const id="dl_b332c2277e9b5d370e6c";
export const url=new URL("../icons/join.svg?v=3f9af6e39d1205b6c376dd2a633ae440d4306f5e8954b759f66cb93343a13306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
