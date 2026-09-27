export const name="lucid_3-message-square-check";
export const id="dl_4f5af5935ab64a5cb007";
export const url=new URL("../icons/lucid_3-message-square-check.svg?v=4701364e0233e197eda3af647a191d8867b70e7c96f232241513dd0103071bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
