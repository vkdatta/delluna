export const name="send_and_archive-fill";
export const id="dl_a5803e9b172829bfc58c";
export const url=new URL("../icons/send_and_archive-fill.svg?v=e90bdeb53f3962f6cc31f23d618c953786f166554960c684af422a8f2445d9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
