export const name="lucid_3-panel-right-close";
export const id="dl_6d5da7e59b8141a98cf6";
export const url=new URL("../icons/lucid_3-panel-right-close.svg?v=cfa111636d68eec9a25624a4966ffe9f289c6acef4c8648a052298eada402d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
