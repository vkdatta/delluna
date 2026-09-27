export const name="car-thin";
export const id="dl_cfe9ad8181294ad8bb3f";
export const url=new URL("../icons/car-thin.svg?v=5225ba3a2b43915c595dbc5811818d01c3af679f6c77b2bcc799c10ec056cda5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
