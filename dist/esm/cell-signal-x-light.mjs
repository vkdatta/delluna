export const name="cell-signal-x-light";
export const id="dl_1db744bcf75243c88009";
export const url=new URL("../icons/cell-signal-x-light.svg?v=ac9163042bd1630e8850b8857890ad47c4b7abe903d483b8a6b66ca1d53d995f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
