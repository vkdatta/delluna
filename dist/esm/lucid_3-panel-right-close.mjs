export const name="lucid_3-panel-right-close";
export const id="dl_6d5da7e59b8141a98cf6";
export const url=new URL("../icons/lucid_3-panel-right-close.svg?v=3a8417f42530b03ca447cb1bc50f8633139ce0c2a185e7924118e7f256041548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
