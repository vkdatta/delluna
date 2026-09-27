export const name="lucid_3-option";
export const id="dl_f249ae7d1c574c8fb6d1";
export const url=new URL("../icons/lucid_3-option.svg?v=94d172ab44cd243e4f1e1b416475ceb7e353754d4394eb409e75ab4904271e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
