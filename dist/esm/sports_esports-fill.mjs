export const name="sports_esports-fill";
export const id="dl_e66b5c976d064187952c";
export const url=new URL("../icons/S/sports_esports-fill.svg?v=a129b35c9db482abda4cc9df029389327d56fe98fa73061969e056fcffd228ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
