export const name="scale";
export const id="dl_f8d6dd61eb8ce93874bd";
export const url=new URL("../icons/scale.svg?v=27239bb1a2d1808398e9f1cacfb6e16f31efe3ca2d916d548806d53735e0a280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
