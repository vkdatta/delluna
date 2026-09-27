export const name="remove_done-fill";
export const id="dl_44b39df467ccb94ab634";
export const url=new URL("../icons/remove_done-fill.svg?v=c975cbf6cc064895adbf174f57f0f2b60c2f26f69db4c4bc3265fd9e1c60c99f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
