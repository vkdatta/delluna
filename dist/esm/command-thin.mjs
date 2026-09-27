export const name="command-thin";
export const id="dl_c01613a2fe9a497db6c8";
export const url=new URL("../icons/command-thin.svg?v=252f431a0bfc1b0fee27639431b95e56c0d9137204fc4d5d1c6cf86c39700acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
