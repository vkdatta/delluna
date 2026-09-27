export const name="badminton";
export const id="dl_b2d3a1556df01da7d9a4";
export const url=new URL("../icons/badminton.svg?v=1c262004b80492ae0ac58c4331111a54f7dbde1159a96f89cfb78b3f40b719ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
