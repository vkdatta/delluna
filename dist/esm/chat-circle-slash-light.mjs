export const name="chat-circle-slash-light";
export const id="dl_c48033967f154346b740";
export const url=new URL("../icons/chat-circle-slash-light.svg?v=d29ea660778e0673dff237b369177341107cd4da5e11c58193cc59725fac4f8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
