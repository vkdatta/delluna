export const name="dog-thin";
export const id="dl_ce0a4ef357234fa89303";
export const url=new URL("../icons/dog-thin.svg?v=f07844656a0f3ed1f1026f100e14f8248cbc342b7a5029037e33c32e41e40c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
