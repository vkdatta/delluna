export const name="lucid_2-diameter";
export const id="dl_39988b4996744011bc9a";
export const url=new URL("../icons/lucid_2-diameter.svg?v=210e4f94fe46b198d4267780b705d49d319bfbf15c7e7254626310735fd5241e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
