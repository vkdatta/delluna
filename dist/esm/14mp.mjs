export const name="14mp";
export const id="dl_561a9ae8e9be63f519f7";
export const url=new URL("../icons/14mp.svg?v=6421536ae41ee591aaaa7349bbe5e5c83c285b2cfa90ba1a76944dd3536a4485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
