export const name="widget_medium";
export const id="dl_1dc1b95ace92bae8a7cd";
export const url=new URL("../icons/widget_medium.svg?v=38110c5c55f25542cc1909726224f91017f0436e20b68e76ab0c786da388c3e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
