export const name="assignment_turned_in";
export const id="dl_564e9fe39fa0601d206a";
export const url=new URL("../icons/assignment_turned_in.svg?v=f29eb5da74cdcc1137ba6f4afe38889d18b4ca4a2b8996518e2e6d6f17d83231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
