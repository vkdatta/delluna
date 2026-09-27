export const name="eye-slash-fill";
export const id="dl_51faf19804ed4de08f30";
export const url=new URL("../icons/eye-slash-fill.svg?v=c08396b60a2c111089223f94997f602fbba9ecf128134967c79dbce17c6097c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
