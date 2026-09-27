export const name="lucid_3-panel-top";
export const id="dl_2357a325cccd4961b27b";
export const url=new URL("../icons/lucid_3-panel-top.svg?v=74d15dcf0a9a9677dcee2d7b072c4bf506d476b2d6740e1324dc570f7c1a594f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
