export const name="offline_pin_off-fill";
export const id="dl_81f8a5c284b82a742caa";
export const url=new URL("../icons/offline_pin_off-fill.svg?v=1a51b41150540d85bc859bc1f7b49a9ee9a546935f188206ccf046012185722b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
