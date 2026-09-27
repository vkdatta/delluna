export const name="forms_apps_script";
export const id="dl_6ace5b4c1121b05e20e7";
export const url=new URL("../icons/forms_apps_script.svg?v=6ee1e926d6b806e1476826e7b15489a1f0dc4312a7b1fd6ded60c6eb975e8c27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
