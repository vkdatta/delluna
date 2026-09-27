export const name="open_run-fill";
export const id="dl_4fc9e2d7d768a8bfb53c";
export const url=new URL("../icons/open_run-fill.svg?v=b95c4eea96baef7c091fc4d1fc5359c32790ad4b26f84f7b788386cab7c00e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
