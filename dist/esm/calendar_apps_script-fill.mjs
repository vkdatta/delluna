export const name="calendar_apps_script-fill";
export const id="dl_7bfd021fe6abe10dcbdb";
export const url=new URL("../icons/calendar_apps_script-fill.svg?v=6d1d86decfdb38799b5e2bd7098d1ca0d9f565b25e651dec1c0e292e6b65baa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
