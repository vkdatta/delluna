export const name="lucid_2-dice-3";
export const id="dl_f909c83767ec4da785e8";
export const url=new URL("../icons/lucid_2-dice-3.svg?v=6a25d8fb73ecad9acbdd714cd2e33b7de74d8ec7a19eabea402904df860ab8b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
