export const name="tower-control";
export const id="dl_eb29323514254b62b183";
export const url=new URL("../icons/tower-control.svg?v=9d861ae65fd6431480c43831ed78e9026b0de52cabee0ac578f693994a941f22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
