export const name="sun-horizon-duotone";
export const id="dl_bd3ec71936093b212e02";
export const url=new URL("../icons/sun-horizon-duotone.svg?v=d9c9970b7f91179230876f8c21028e494fd6d749e4268f93bba19e0a9f711b65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
