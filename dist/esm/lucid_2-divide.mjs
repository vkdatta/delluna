export const name="lucid_2-divide";
export const id="dl_4aa54da05b38441799c0";
export const url=new URL("../icons/lucid_2-divide.svg?v=5df478ad0b638b847a3e7fbf39351db9ac736c2e88752f5abb2b656124f8a3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
