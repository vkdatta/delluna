export const name="star-four-fill";
export const id="dl_902bc0e67102ba25b679";
export const url=new URL("../icons/star-four-fill.svg?v=ca47df9ec004004cffa901e1526d1e9fd83ca4f98ce600104536f6da216340d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
