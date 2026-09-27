export const name="check_circle_unread";
export const id="dl_cc32eea411715369e528";
export const url=new URL("../icons/check_circle_unread.svg?v=7bbb0e748b8fa783090b2e08312bc00cda5faecf9711ecab4879ab278815a0bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
