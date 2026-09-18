export const name="request_page";
export const id="dl_d083ce82f8ba4c0f9993";
export const url=new URL("../icons/R/request_page.svg?v=8009d14a47bbd16af0c5d21175ceed6491f3c994b78fa279ad9f93bff43d1711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
