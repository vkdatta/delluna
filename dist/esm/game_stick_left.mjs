export const name="game_stick_left";
export const id="dl_e73a3147ef7642a69007";
export const url=new URL("../icons/game_stick_left.svg?v=ccff4a34bbf219c1946134f3578daca81a73f83002a3f9c76beae89d54795fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
