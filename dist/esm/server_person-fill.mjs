export const name="server_person-fill";
export const id="dl_9632e257d65da31ed04e";
export const url=new URL("../icons/server_person-fill.svg?v=fa478842db4e7e83bca8d36b6898287bd117a70447bc8b9d3ce56c3e4e6a2a6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
