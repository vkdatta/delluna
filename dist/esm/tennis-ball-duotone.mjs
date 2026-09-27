export const name="tennis-ball-duotone";
export const id="dl_d3c48d2d412795e73af5";
export const url=new URL("../icons/tennis-ball-duotone.svg?v=8af158d3ec71168f50f2dd942180967b85559b44c5f601e74cc02224d6917801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
