export const name="no_food";
export const id="dl_fc2163814c29644122da";
export const url=new URL("../icons/no_food.svg?v=32e5d45bf5bd1edffe5cfc85948ec57856e112cb2c8773b66815d65ccf89a468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
