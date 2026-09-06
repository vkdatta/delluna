export const name="lucid_3-message-circle-off";
export const id="dl_1bf282505c1d4baaa4e8";
export const url=new URL("../icons/lucid_3-message-circle-off.svg?v=d56363cc0bd6747b2321f07377d487a0770a0ae1215fb7c94aa1fafda71d32e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
