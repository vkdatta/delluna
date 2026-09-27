export const name="forms_apps_script";
export const id="dl_aa05409724ae345b6304";
export const url=new URL("../icons/forms_apps_script.svg?v=5fd2a0e6915657e95645c608ad3743036256e635e5ae99325e6136f044c8b093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
