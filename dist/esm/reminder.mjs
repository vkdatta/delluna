export const name="reminder";
export const id="dl_e0e2f2ed899b318014fc";
export const url=new URL("../icons/reminder.svg?v=544da8d6645c7861e04de813da1a030b50c51d7a0b6348fd6d53234d1b488be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
