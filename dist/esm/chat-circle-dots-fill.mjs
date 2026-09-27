export const name="chat-circle-dots-fill";
export const id="dl_fbe98c637cc448918e52";
export const url=new URL("../icons/chat-circle-dots-fill.svg?v=25f1008981f53a27e8e9b3086e8445448ac6bac3ee16a3cbec534ba7ae17815d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
