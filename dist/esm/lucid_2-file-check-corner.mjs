export const name="lucid_2-file-check-corner";
export const id="dl_9203d4843f2f404e86a7";
export const url=new URL("../icons/lucid_2-file-check-corner.svg?v=53a0b9a0cf4f27853eb9e26442a49c44fcadebb54c578348c90805599d283c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
