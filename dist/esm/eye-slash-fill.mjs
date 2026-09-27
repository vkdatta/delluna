export const name="eye-slash-fill";
export const id="dl_51faf19804ed4de08f30";
export const url=new URL("../icons/eye-slash-fill.svg?v=fcd854a482103df8fd632ba740d5cd280f8871ee93ef79464fb467b7605934ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
