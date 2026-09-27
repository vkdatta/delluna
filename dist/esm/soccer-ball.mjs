export const name="soccer-ball";
export const id="dl_a6655079fcdc7dcac2c0";
export const url=new URL("../icons/soccer-ball.svg?v=d99756436dc379ae1ef397b3c80deec1fc43767877906fcf5471a944a560b631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
