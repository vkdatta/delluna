export const name="tent-light";
export const id="dl_2d30ee9de2787e03a990";
export const url=new URL("../icons/tent-light.svg?v=d7cbaa9dc2e6e8fafb162bef8ab27beeaa55ff8cefe2127e8af0e39166ce48bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
