export const name="skip-forward-thin";
export const id="dl_235a12b47ce49fa1de82";
export const url=new URL("../icons/skip-forward-thin.svg?v=3c937f707e9f399076927328db00cbc931a9484b1733bcd586f29108f9f0ec0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
