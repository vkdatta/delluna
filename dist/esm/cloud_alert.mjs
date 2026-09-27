export const name="cloud_alert";
export const id="dl_de0255ed3a33588b3724";
export const url=new URL("../icons/cloud_alert.svg?v=785c792dc79c13a549ab1af4c1e2029a37156cbfae3df2e3dde0863ea5755cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
