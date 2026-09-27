export const name="lucid_2-file-headphone";
export const id="dl_3bf0f8cec5d2457fbbbc";
export const url=new URL("../icons/lucid_2-file-headphone.svg?v=7d3c2c90767654ee0cb2263d690e6c5e61592f45c59429a37ef04325d9d4b9c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
