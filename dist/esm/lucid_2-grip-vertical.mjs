export const name="lucid_2-grip-vertical";
export const id="dl_445c7ebdf017410a8128";
export const url=new URL("../icons/lucid_2-grip-vertical.svg?v=908bc2dba88ef6454c931bd0c252d8f3b7e995f6f76300f1eb5b9990e6562bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
