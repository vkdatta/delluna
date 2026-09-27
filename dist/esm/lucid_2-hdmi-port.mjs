export const name="lucid_2-hdmi-port";
export const id="dl_838437763898425d8acb";
export const url=new URL("../icons/lucid_2-hdmi-port.svg?v=9af42e9cf92b961c32f1db58c5b49256a389d5cb36d6bf0bcc8a7765e7dbd36d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
