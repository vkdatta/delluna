export const name="person_heart";
export const id="dl_48b753435853807b3b97";
export const url=new URL("../icons/person_heart.svg?v=b8d5c586582d3a5764937e2bea10c255823b26ea88cc349e6361310644113cd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
