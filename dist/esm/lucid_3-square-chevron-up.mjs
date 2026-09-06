export const name="lucid_3-square-chevron-up";
export const id="dl_e88bdd2bcd4546febbf8";
export const url=new URL("../icons/lucid_3-square-chevron-up.svg?v=a7437adbf8d1b2ae757acc47a78f7020ee95e5124c749a0b0f6348450ac876a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
