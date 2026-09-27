export const name="game_button_r2-fill";
export const id="dl_59be39909ddc6a130a89";
export const url=new URL("../icons/game_button_r2-fill.svg?v=a628b789deadd41a33b9c184f5f2593deb3c6d518f53284dae123ee2e1b2e211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
