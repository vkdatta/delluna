export const name="lucid_3-panel-right-open";
export const id="dl_31e0d961384a4195a136";
export const url=new URL("../icons/lucid_3-panel-right-open.svg?v=b7ab20a675909a20001c0b839b29bf0610b459c3972920c83d8ef3f87f74ff04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
