export const name="lucid_3-message-square-share";
export const id="dl_bddfa3d0991041adba88";
export const url=new URL("../icons/lucid_3-message-square-share.svg?v=725c422d6e024ae620a2ec61a061355aebc2ff7349938cf7cd6391c5d3d81139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
