export const name="volleyball-light";
export const id="dl_59c87effd4e54606a2ea";
export const url=new URL("../icons/V/volleyball-light.svg?v=e2eec21eff6cdc350e56fda1de37e57593d9d40788c206ca2db7e5a711fffd98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
