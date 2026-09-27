export const name="lucid_3-message-circle-more";
export const id="dl_1f9d549f31b14b1abc86";
export const url=new URL("../icons/lucid_3-message-circle-more.svg?v=6e64edaf37f363c08d5defe60199719aaf869ee7b6fa950d80acc0a8b8192cca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
