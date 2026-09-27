export const name="smiley-light";
export const id="dl_0b1eb0579358bbbcdfae";
export const url=new URL("../icons/smiley-light.svg?v=89dba6564f012604eba8e498ceac83d60b1dfcf8e12a48b30074b3ebfa1829ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
