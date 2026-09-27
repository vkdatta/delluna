export const name="settings";
export const id="dl_94e973e07ef32a8c2cc2";
export const url=new URL("../icons/settings.svg?v=9df015dde4959a94c2fbdc184fae5d715fdac2a37b3fdb49b628c6814882a9d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
