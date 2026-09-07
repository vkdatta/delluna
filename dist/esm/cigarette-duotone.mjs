export const name="cigarette-duotone";
export const id="dl_bb5aaed69148436dbb84";
export const url=new URL("../icons/cigarette-duotone.svg?v=31e065cfd76925e8a50a3ba9bacdc405a979ba6032b7c8539385cb4ba5b69755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
