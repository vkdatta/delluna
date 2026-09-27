export const name="lucid_2-mails";
export const id="dl_108ae11a80504667ab4f";
export const url=new URL("../icons/lucid_2-mails.svg?v=ffdd46cb6c40d8d1252a23c17f81020a50f97fc3ca55d0e2e8afd5ecf00a7ef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
