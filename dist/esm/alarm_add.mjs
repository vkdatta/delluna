export const name="alarm_add";
export const id="dl_b5b14fd0c871c508d8cd";
export const url=new URL("../icons/alarm_add.svg?v=5f858a2a87e487be400e4052d8e1a9129b94efe749c9e91bd90f11cc3f5db5f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
