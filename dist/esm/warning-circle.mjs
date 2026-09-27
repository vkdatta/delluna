export const name="warning-circle";
export const id="dl_a312dea01beb71a7db96";
export const url=new URL("../icons/warning-circle.svg?v=918d71150d98ab5c15dff67cae87346a7fff5d829086f1a1f728f395b18319b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
