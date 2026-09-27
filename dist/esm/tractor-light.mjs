export const name="tractor-light";
export const id="dl_16d7a2977ea89ba45a19";
export const url=new URL("../icons/tractor-light.svg?v=033006e797aa61fd7ec9b0e817d4c75e6b49889a8790508e6d7a48d54805eeb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
