export const name="wifi-none-light";
export const id="dl_685b8d0bf873b96b7522";
export const url=new URL("../icons/wifi-none-light.svg?v=27d121984b5da7be41c31fd2383818d9b8851a9213ed73410f60d5af6cb289cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
