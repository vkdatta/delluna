export const name="slack-logo-duotone";
export const id="dl_ea16b239e5d4452080a3";
export const url=new URL("../icons/slack-logo-duotone.svg?v=40274f581af7b801fbe039d898842ce000cc94e1177169cff4cd05e7440b9a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
