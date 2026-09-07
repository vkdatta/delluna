export const name="lucid_3-monitor-up";
export const id="dl_740f1a251d3844789d2f";
export const url=new URL("../icons/lucid_3-monitor-up.svg?v=9c000862c2262c8b8f484fcc8d7bb81a661d2a4f711778974a86625c70248748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
