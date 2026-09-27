export const name="database_upload-fill";
export const id="dl_7227cc7420b869e3cdfa";
export const url=new URL("../icons/database_upload-fill.svg?v=7d777b72908939d4e530b9d1da96b1c193fe7d615fe7fbf8bffc3e5a5e883263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
