export const name="file_save-fill";
export const id="dl_d452ec2971a73ca6e1ef";
export const url=new URL("../icons/file_save-fill.svg?v=8747ad16048bed83d56816da1f5e6186c1fc3eab4827935a33e270b735231380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
