export const name="fallout-shelter-thin";
export const id="dl_d53252257ff04cc29480";
export const url=new URL("../icons/fallout-shelter-thin.svg?v=820961c163c310471c287eba9ad3b41635f8155b2f2038c13f1e4c9bae9c72af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
