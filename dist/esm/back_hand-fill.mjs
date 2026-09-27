export const name="back_hand-fill";
export const id="dl_ac70552b1cf6e6eac3ab";
export const url=new URL("../icons/back_hand-fill.svg?v=dce530d771fff27c2da9ed433259d58ab73ce55cd5c36045328cabcb3e575d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
