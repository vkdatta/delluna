export const name="voicemail_2";
export const id="dl_f13995296d394d928c77";
export const url=new URL("../icons/voicemail_2.svg?v=645b2cadb2e78fc4e0cbd87114908f6fc74376519eb52305928ae57f96a9f2eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
