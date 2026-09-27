export const name="lucid_1-bot-off";
export const id="dl_e5b22799c90d40dc8ffe";
export const url=new URL("../icons/lucid_1-bot-off.svg?v=4ae55b93db49579ff796311ddec55b168964ec74ef0ee6e40b0495e90900fe8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
