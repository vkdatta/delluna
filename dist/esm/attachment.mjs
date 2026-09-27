export const name="attachment";
export const id="dl_8c3c92c20c3b9d24311d";
export const url=new URL("../icons/attachment.svg?v=02318a48bae16e8505104946de2529a4842aa3724b9a3903b4b8faaf0f1c6999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
