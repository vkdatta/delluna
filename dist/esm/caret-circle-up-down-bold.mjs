export const name="caret-circle-up-down-bold";
export const id="dl_74ed0bc314cc411c9c09";
export const url=new URL("../icons/caret-circle-up-down-bold.svg?v=bf5e219693ebc637c7b675f6891ef3dafdde860f6a2ea46f7dbcf0fd9b859426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
