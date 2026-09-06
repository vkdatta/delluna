export const name="arrow-down-left-bold";
export const id="dl_76ba3e8b77c046e9abe7";
export const url=new URL("../icons/arrow-down-left-bold.svg?v=7d6cfd8d837a2037106c59eec2a32450c399c64dfd9906f35e1a427317a7fe3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
