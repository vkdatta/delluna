export const name="cookie_off";
export const id="dl_ef3c07f355894fa783cd";
export const url=new URL("../icons/cookie_off.svg?v=3ef0f797496be9214cfecc6b31ca244f079ac20402dbdeeb82443bc92b2de572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
