export const name="lucid_2-japanese-yen";
export const id="dl_2ebe0219c0ca49649c0c";
export const url=new URL("../icons/lucid_2-japanese-yen.svg?v=2593197653741d55607ece106a8c5048b21741529f65f646a1543e78bcdc0d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
