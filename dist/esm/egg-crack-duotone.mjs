export const name="egg-crack-duotone";
export const id="dl_2f37c43bff414eb6a463";
export const url=new URL("../icons/egg-crack-duotone.svg?v=e5606c1ab03cd4e506221d353997737c20b20844d3be43ecc2508140ff067095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
