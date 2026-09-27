export const name="mindfulness";
export const id="dl_75d2f8198b69c1afb623";
export const url=new URL("../icons/mindfulness.svg?v=3e050fc9dae03d2a20fba57d289eb6eeb46a88518627393d25b488be25301a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
