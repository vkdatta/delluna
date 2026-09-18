export const name="game_trigger_left-fill";
export const id="dl_3f63a455b8ca4eb8af4a";
export const url=new URL("../icons/G/game_trigger_left-fill.svg?v=3381080a988fe90c72b60394ffcd335c412528f9c03e55aeb1dc7183eacc280f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
