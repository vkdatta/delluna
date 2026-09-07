export const name="racquet-light";
export const id="dl_07e36bd858de4ff79346";
export const url=new URL("../icons/racquet-light.svg?v=d98fa106fae4cc450d8843a257c4f716e7506a7d0fb385f0b6de73cbdec03433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
