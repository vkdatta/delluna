export const name="lucid_2-drum";
export const id="dl_c68e07fac3b148f482a5";
export const url=new URL("../icons/lucid_2-drum.svg?v=93d4337053003c61f341d55a8ad7bfe3bfbb2fb7fbe928a394df798e9b1b47b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
