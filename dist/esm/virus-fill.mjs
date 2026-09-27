export const name="virus-fill";
export const id="dl_9e1494b15ffffd3f284e";
export const url=new URL("../icons/virus-fill.svg?v=554f2f31196f900ddea26801480702bd2f4d176a792c13caedc4a1d0adeffd52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
