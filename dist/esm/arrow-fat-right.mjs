export const name="arrow-fat-right";
export const id="dl_5fd54532a69543b5b69c";
export const url=new URL("../icons/arrow-fat-right.svg?v=4116d8c410cc0599add3565d5188e771fe9c22f936aba5675e7741937636dc89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
