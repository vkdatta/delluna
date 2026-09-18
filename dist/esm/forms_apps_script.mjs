export const name="forms_apps_script";
export const id="dl_de2488e1c415423fa262";
export const url=new URL("../icons/forms_apps_script.svg?v=feb626ecaa77bf107d93112ccfea31ad40af64076f74e189e20d9f19a7e5c1cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
