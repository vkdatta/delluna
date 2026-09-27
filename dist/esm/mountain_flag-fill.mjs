export const name="mountain_flag-fill";
export const id="dl_a09f62b0aa57f144b8fc";
export const url=new URL("../icons/mountain_flag-fill.svg?v=902f8435544c4e7e8745300abe2196be8116afeda1e1e6fd75eb1ab61a964338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
