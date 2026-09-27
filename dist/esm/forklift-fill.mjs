export const name="forklift-fill";
export const id="dl_83199ed027a318a634d0";
export const url=new URL("../icons/forklift-fill.svg?v=c283cd426c44d71a483ce712a6de07f3ea21b18ebb8544565d75e8caf0fde44e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
