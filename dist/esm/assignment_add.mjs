export const name="assignment_add";
export const id="dl_fc986090ef11eacdb5aa";
export const url=new URL("../icons/assignment_add.svg?v=fdd2ecd94f88a5448d20dd66b104da9904f6e293afb58f32dc8922dafbd8ffc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
