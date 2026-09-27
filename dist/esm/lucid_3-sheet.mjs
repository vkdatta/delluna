export const name="lucid_3-sheet";
export const id="dl_0974f81d2781478d8869";
export const url=new URL("../icons/lucid_3-sheet.svg?v=2e98f412cc94266046ebc58d64d80a381adf437a684e7088ec3948917e883736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
