export const name="chat-centered-text-light";
export const id="dl_fa2d59e097684bb9a29f";
export const url=new URL("../icons/chat-centered-text-light.svg?v=3a4feaf80ecac47cfbb8abc904e2ddb227a5144e121144ccd3eb671a74db7c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
