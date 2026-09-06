export const name="list-dashes-light";
export const id="dl_5fb8e71ed615443bae3a";
export const url=new URL("../icons/list-dashes-light.svg?v=d40bf20252ef28c5db65ddad76ddbde61d8b1f51cfc006315081e983d2747e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
