export const name="lucid_1-calendar-heart";
export const id="dl_6823a97799ba4e76bb34";
export const url=new URL("../icons/lucid_1-calendar-heart.svg?v=f9a2556481b05cbaef5866afda60787f2e79a2f6c1c7401572152f4a81a21233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
