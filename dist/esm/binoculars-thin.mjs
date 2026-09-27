export const name="binoculars-thin";
export const id="dl_8cd5e769ac1f4fd68576";
export const url=new URL("../icons/binoculars-thin.svg?v=7715bd18d99e99e54f95b4a5a257f869296de50a0412fc24c41ea6eeacbe72df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
