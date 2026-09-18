export const name="bottom_panel_close";
export const id="dl_2daa0a89fdef4e22b449";
export const url=new URL("../icons/bottom_panel_close.svg?v=c6443763225b76c43a97a5ec8ab5671ca1b090484f303692406ca83ae9faa55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
