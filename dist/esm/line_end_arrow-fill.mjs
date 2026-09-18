export const name="line_end_arrow-fill";
export const id="dl_f509470217384165868b";
export const url=new URL("../icons/line_end_arrow-fill.svg?v=860407bb1f7013e3a50ae2ee4105935a30a04483969ce854d4cc5991c8c3b70f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
