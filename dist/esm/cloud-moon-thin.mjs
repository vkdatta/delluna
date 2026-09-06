export const name="cloud-moon-thin";
export const id="dl_2cf8494d495a4936b74d";
export const url=new URL("../icons/cloud-moon-thin.svg?v=50aa2ed6a2c734a428aa767fa076371056f7a72ffdf9d693b3e94bdb8e556ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
