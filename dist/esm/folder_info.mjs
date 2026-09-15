export const name="folder_info";
export const id="dl_13cf4a7b626b4904a236";
export const url=new URL("../icons/F/folder_info.svg?v=f5f15898a62d6a32e96cd2c228302a7bc0d89003ade4746b865d82625d032ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
