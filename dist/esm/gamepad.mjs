export const name="gamepad";
export const id="dl_10cafb74930cd811ea57";
export const url=new URL("../icons/gamepad.svg?v=8175afecf003b7c31d76bf1186c68a7c24247298b3f71c1d9e3a397fa11b4a4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
