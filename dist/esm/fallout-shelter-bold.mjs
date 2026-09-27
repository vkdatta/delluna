export const name="fallout-shelter-bold";
export const id="dl_7061414af4024fdcb310";
export const url=new URL("../icons/fallout-shelter-bold.svg?v=04f6a3eb162d76534b2de019b1a3e44631050532455df44aaeba04910e652861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
