export const name="explore_nearby-fill";
export const id="dl_cd69993ec58e4f638a46";
export const url=new URL("../icons/explore_nearby-fill.svg?v=74deb2bcc74c145376709c6f4848c0046f7bc90f9297ca034137912878527477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
