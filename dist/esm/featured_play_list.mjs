export const name="featured_play_list";
export const id="dl_4f0d9f61a14cd3c66849";
export const url=new URL("../icons/featured_play_list.svg?v=117a76e35681b5b0fafa50573a8c0aebf7d3aac46841cacee4eb50bc01cf247b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
