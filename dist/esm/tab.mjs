export const name="tab";
export const id="dl_b5911ef925776bcc5f8f";
export const url=new URL("../icons/tab.svg?v=3e785a65d1fbf8efe69beb927c308863cc3cb06a4e07581d38e08e918831da66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
