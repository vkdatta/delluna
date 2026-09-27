export const name="tooth";
export const id="dl_39b27ecc6f93eb774761";
export const url=new URL("../icons/tooth.svg?v=d685b2055a25695ae819e2d61757a217c55a937c156f905925311ecb1a2fb0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
