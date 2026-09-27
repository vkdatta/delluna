export const name="lucid_1-clipboard-copy";
export const id="dl_355154f1f66f49a09797";
export const url=new URL("../icons/lucid_1-clipboard-copy.svg?v=904c261df5e932d6ad2096d9d034672c811eb891118113a915cb53409f1ec170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
