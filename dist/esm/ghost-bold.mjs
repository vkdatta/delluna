export const name="ghost-bold";
export const id="dl_9173da078ec14a3d9f7e";
export const url=new URL("../icons/ghost-bold.svg?v=e90c00348809a237c6e6e6a71fc921d95e61cd8c8f465c36f792059a8e3565cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
