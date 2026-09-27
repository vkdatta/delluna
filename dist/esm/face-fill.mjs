export const name="face-fill";
export const id="dl_243dd3cc9449afe48b93";
export const url=new URL("../icons/face-fill.svg?v=7e6ded48efe341bce15569cf97dcf0dd2f03bd54b143cda68591b2c2426ffa92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
