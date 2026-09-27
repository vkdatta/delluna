export const name="google-podcasts-logo-fill";
export const id="dl_06d835534db9480a986e";
export const url=new URL("../icons/google-podcasts-logo-fill.svg?v=e989fb880b349d6fdb6dfaff3fb1ba76ded4c1986c72ff253197131fd05a6ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
