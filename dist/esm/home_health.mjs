export const name="home_health";
export const id="dl_ddb497c20fca75f5009f";
export const url=new URL("../icons/home_health.svg?v=9a4eea627468147210d363f8dca52ce947f6b5857f975bc37d00c69ee24f20a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
