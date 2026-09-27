export const name="lucid_1-bookmark-off";
export const id="dl_7e9f4cd3736e4528b550";
export const url=new URL("../icons/lucid_1-bookmark-off.svg?v=84bdbbee936802087d489b449844b67dcce2d7a63678892bc129b017cb2f25a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
