export const name="google-photos-logo-thin";
export const id="dl_b425eaf292b743f69782";
export const url=new URL("../icons/google-photos-logo-thin.svg?v=4447bdd587a2bad31087bff2d7ef06e4f934c975475cd9736a28cc26c3ed9014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
