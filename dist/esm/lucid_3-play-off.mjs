export const name="lucid_3-play-off";
export const id="dl_4d5795264b6f419eb15c";
export const url=new URL("../icons/lucid_3-play-off.svg?v=09c009964d2081fe92349a8c7751fb218ba87ff8cb1762f92bfece5dd5a13afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
