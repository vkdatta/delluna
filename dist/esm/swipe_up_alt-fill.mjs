export const name="swipe_up_alt-fill";
export const id="dl_51b758a6b46f82636c05";
export const url=new URL("../icons/swipe_up_alt-fill.svg?v=c43780ca573c35ad1c4f715f63100c8e4b9ac309373adf05f00320afc51b38ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
