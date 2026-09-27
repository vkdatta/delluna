export const name="rectangle-duotone";
export const id="dl_0f77ec179f4340e1a49b";
export const url=new URL("../icons/rectangle-duotone.svg?v=adaf1b40bcc020800d84978b772a6f9091f93f35e22b680b17e40829426d93fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
