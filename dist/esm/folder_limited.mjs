export const name="folder_limited";
export const id="dl_4bbd4efcafe5c07dadb7";
export const url=new URL("../icons/folder_limited.svg?v=7efa1046a5ea7a8e046e5de53e22ac82ed4f1aa99b64b03132a7ac0242ce0002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
