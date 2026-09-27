export const name="terminal_2-fill";
export const id="dl_7368232d792d3bd10085";
export const url=new URL("../icons/terminal_2-fill.svg?v=e28be56d66270974584fa8e31cb754332f7a93f1eddd745e1e995eaf8b6e0102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
