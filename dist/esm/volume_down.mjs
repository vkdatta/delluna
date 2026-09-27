export const name="volume_down";
export const id="dl_ada8fa71e72367ee6c5b";
export const url=new URL("../icons/volume_down.svg?v=91a830dbe00cc014fad3ba3721e8b63628b1b0d68aca935595d4464a0ed7533e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
