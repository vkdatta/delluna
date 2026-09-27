export const name="lucid_1-circle-arrow-out-up-left";
export const id="dl_5be149d43dc0464c8227";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-left.svg?v=9cf8e89a3e860529b192769809f10bcd4b6682a58943f439e1f328624226634b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
