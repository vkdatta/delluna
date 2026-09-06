export const name="lucid_2-mails";
export const id="dl_108ae11a80504667ab4f";
export const url=new URL("../icons/lucid_2-mails.svg?v=5549c1a55763a167dd5d9f07c4683c674813d60ad043b7e37e9e19ce7629d96f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
