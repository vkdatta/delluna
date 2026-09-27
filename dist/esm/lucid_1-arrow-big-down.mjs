export const name="lucid_1-arrow-big-down";
export const id="dl_f4ac0b4d3e7540d7bdc7";
export const url=new URL("../icons/lucid_1-arrow-big-down.svg?v=93ca739b3544dc3a961914a039fa12b5fd8ca355a54d2467d41b1f9f4846c3c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
