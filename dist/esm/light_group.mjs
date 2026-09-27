export const name="light_group";
export const id="dl_1b288059b1905b6b73ab";
export const url=new URL("../icons/light_group.svg?v=12caf120a7422f222a328b97b2f1a8e2e7de8f49438a22d07050dbf3e061c7ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
