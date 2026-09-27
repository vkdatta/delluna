export const name="hearing_aid_left-fill";
export const id="dl_b2bd5c13b49af2ecd195";
export const url=new URL("../icons/hearing_aid_left-fill.svg?v=e35734a1c0d07006804e7e6e20f9265ca288effe6bca1ea6b0cd6b4d7439eee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
