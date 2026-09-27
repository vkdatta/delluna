export const name="inbox_text_share";
export const id="dl_8a4016bdfcbb6eed7d6a";
export const url=new URL("../icons/inbox_text_share.svg?v=fa3c2bc36ccb1b56a6bf844cf57c9d7a3abc1117af251fde7b3d7b89de259bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
