export const name="lucid_2-hourglass";
export const id="dl_52621c8e50184cb4bdcf";
export const url=new URL("../icons/lucid_2-hourglass.svg?v=04aad21ab0e3e00c746d6b59413f243ed7e4b1bc7ea79f85d848a1b33a1a260c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
