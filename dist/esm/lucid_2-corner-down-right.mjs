export const name="lucid_2-corner-down-right";
export const id="dl_4ce79ef01d8f4b5b87a3";
export const url=new URL("../icons/lucid_2-corner-down-right.svg?v=cc8b5b04161b7ca840348a8db0a890d92885d7cf05bc99c036dda90263fc3591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
