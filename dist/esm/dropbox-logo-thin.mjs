export const name="dropbox-logo-thin";
export const id="dl_2af5e5b6a87f4328b64c";
export const url=new URL("../icons/dropbox-logo-thin.svg?v=3316bc281cc54f89373d1f00aff20caaa43e9325ca4bc64c9e24042b4f05c4e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
