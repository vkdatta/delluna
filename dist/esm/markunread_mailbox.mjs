export const name="markunread_mailbox";
export const id="dl_fe0132f595bf75288fcd";
export const url=new URL("../icons/markunread_mailbox.svg?v=e33dbfd8973cfb0c7161b8f6da7caed20ba48f8af9b409acb1336e5bbef687ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
