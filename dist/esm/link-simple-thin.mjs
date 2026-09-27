export const name="link-simple-thin";
export const id="dl_0db9c2237c5844af979f";
export const url=new URL("../icons/link-simple-thin.svg?v=ebd75b97c04923a78e0f821f05d1e931d28fd04afaed11ef60434e89131a764a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
