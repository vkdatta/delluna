export const name="google-cardboard-logo-thin";
export const id="dl_9ea3883d94fb428a812f";
export const url=new URL("../icons/google-cardboard-logo-thin.svg?v=5b607bf0ba29ffcf8ad1fdec3b3cf4c37b0f1e956da314465cda0303a87d10a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
