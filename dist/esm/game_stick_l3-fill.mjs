export const name="game_stick_l3-fill";
export const id="dl_5563248bdf0a0aee7334";
export const url=new URL("../icons/game_stick_l3-fill.svg?v=3839be7ff4bce76ad1330af651bc5f3353d72623604a81704645d3b5b696e616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
