export const name="playground";
export const id="dl_0b8404cfdce1e9bad745";
export const url=new URL("../icons/playground.svg?v=89e083a63170d0d7314c814b908efeb73b4c2fe861bddf554c8e65e40ead9c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
