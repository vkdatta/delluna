export const name="caret-circle-down";
export const id="dl_223adce4cd5c48ef90c0";
export const url=new URL("../icons/caret-circle-down.svg?v=5896bb320d59c98783f98ed765502e597f6aa383be7742abd3a46a97d842e68f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
