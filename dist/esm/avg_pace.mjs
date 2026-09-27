export const name="avg_pace";
export const id="dl_115c986b429f9fff91b9";
export const url=new URL("../icons/avg_pace.svg?v=e0d0be55f8ed8362424720fe937948c7fa2baf21e106a4db73644fe3e7ffcb25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
