export const name="lucid_1-cloud-sun";
export const id="dl_0f21d7c621704c75b3b9";
export const url=new URL("../icons/lucid_1-cloud-sun.svg?v=a44c7ce307ec8b0fae6ceef96d7433b1e8145fba32ba4ac9c2aad66291f6e92c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
