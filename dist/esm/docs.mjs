export const name="docs";
export const id="dl_e7619aa211b160bbe971";
export const url=new URL("../icons/docs.svg?v=8e9f48fff58eca945891208aa441dde03dcf93ca07bc753daf9226ab8d84fcb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
