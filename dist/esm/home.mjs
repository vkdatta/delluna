export const name="home";
export const id="dl_70da741ebf0d46489309";
export const url=new URL("../icons/home.svg?v=25c53945c1504acd4b96d5714f969e67d78aee66b8d9bcbe5b097eea72c27b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
