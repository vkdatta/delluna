export const name="cross";
export const id="dl_ad560705d24148038be3";
export const url=new URL("../icons/cross.svg?v=caa50fa8a1ee6a405be61296ad8ab8376b318ca75bfa7ada24b1e56d6d77dc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
