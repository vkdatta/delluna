export const name="lucid_1-circle-pile";
export const id="dl_1bbe95d436f14429aa50";
export const url=new URL("../icons/lucid_1-circle-pile.svg?v=bcdd9d2408f3adabd05740e8cdd5737c3cf7808c7cd8b5e985d29d5c80effc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
