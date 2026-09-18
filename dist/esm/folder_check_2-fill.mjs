export const name="folder_check_2-fill";
export const id="dl_0b2aadf2b659497caa4e";
export const url=new URL("../icons/folder_check_2-fill.svg?v=d06984caa8430061a7b646526fd2efb65ebb7d17f6a9135925b8baadb32bf616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
