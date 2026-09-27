export const name="create_new_folder-fill";
export const id="dl_f1f2a67c73dffd7f6c3f";
export const url=new URL("../icons/create_new_folder-fill.svg?v=6328001fdf1cbd0b8c85724ecee685b6ee3df9e3c44c16672eb6f5357eda5216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
