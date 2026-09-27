export const name="arrow-fat-lines-right";
export const id="dl_46e83a16b45d4746842c";
export const url=new URL("../icons/arrow-fat-lines-right.svg?v=ca0d239ba865cbbd925937f7e5e0dda50df2893e8838b60c50863ace1e529a6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
