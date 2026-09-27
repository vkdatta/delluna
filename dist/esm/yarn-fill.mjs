export const name="yarn-fill";
export const id="dl_29b675cf913a281cd265";
export const url=new URL("../icons/yarn-fill.svg?v=799efb29e38fd74fb2a4f38f9e23556f73504d76f698e9f169e761bf61d08ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
