export const name="lucid_1-circle-arrow-out-up-right";
export const id="dl_0d77d46c9d074e80aa04";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-right.svg?v=705d500a5d94f29accba52c14b6969157d1f667c42ae7407609f32b65a07123f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
