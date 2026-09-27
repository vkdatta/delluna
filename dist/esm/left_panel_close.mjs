export const name="left_panel_close";
export const id="dl_13826faebc45c4bc4448";
export const url=new URL("../icons/left_panel_close.svg?v=82b23c053ada91154efa360c43c2e42a39f349ecce4660106723047cbc81323c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
