export const name="mail_asterisk";
export const id="dl_c9319873e682cb60c9d6";
export const url=new URL("../icons/mail_asterisk.svg?v=6f65d180d3df7375fe61d3f074801eab8f658467516a828081a571318e6f3d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
