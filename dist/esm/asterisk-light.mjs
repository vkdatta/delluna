export const name="asterisk-light";
export const id="dl_e4c8bad305924f00baf8";
export const url=new URL("../icons/asterisk-light.svg?v=a60ad3785f100c2f9cc5f0f621ce5b7d698a82e8e427c5c25f543a80d870f13e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
