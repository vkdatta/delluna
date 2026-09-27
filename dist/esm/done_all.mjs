export const name="done_all";
export const id="dl_ed650dfa8a2e40b76d2a";
export const url=new URL("../icons/done_all.svg?v=dc225400268a81857d334bbe97dd4c8c2947416b3e192f738df2b17edcb0f619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
