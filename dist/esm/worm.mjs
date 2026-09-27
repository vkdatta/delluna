export const name="worm";
export const id="dl_875390c23a7046319c2d";
export const url=new URL("../icons/worm.svg?v=faf9278e6f4a738f08aa6a9251795783264001aae35f52b175f1d1f135349988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
