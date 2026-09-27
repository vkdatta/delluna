export const name="lucid_2-eye-off";
export const id="dl_7d488b9a504f4fdd82b9";
export const url=new URL("../icons/lucid_2-eye-off.svg?v=a6536cea84556859d5b645c2fdba4ebb03856f7f15cb54ed47d4473494a5adb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
