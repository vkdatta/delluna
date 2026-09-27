export const name="lucid_1-circuit-board";
export const id="dl_4b15e598f43f4bbc9d46";
export const url=new URL("../icons/lucid_1-circuit-board.svg?v=746a67fadde1d3c1f2c1c9c5c191cbfab0176da99c70fd7981702a1a0aa3e151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
