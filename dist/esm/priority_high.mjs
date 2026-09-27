export const name="priority_high";
export const id="dl_99ac1adf02ba67be0b69";
export const url=new URL("../icons/priority_high.svg?v=3322fba1986b8df261f59e85c1290d0ce085f4ba001f505851d96474d64504db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
