export const name="graduation-cap-light";
export const id="dl_7a15842a54f54992a876";
export const url=new URL("../icons/graduation-cap-light.svg?v=726bd7dd4843b8a617398151624ddf052135c45353aeebda11974c1ab985d38c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
