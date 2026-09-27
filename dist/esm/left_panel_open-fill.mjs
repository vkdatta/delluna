export const name="left_panel_open-fill";
export const id="dl_b33a3e9705fafefbc8b1";
export const url=new URL("../icons/left_panel_open-fill.svg?v=cff370f806fa9b6a2e48e8b7a6d06e0cd378707fb7e402c60f6cc17525b83750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
