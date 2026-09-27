export const name="chat-circle-slash-light";
export const id="dl_c48033967f154346b740";
export const url=new URL("../icons/chat-circle-slash-light.svg?v=24599d54db8a50a3dae38c15a5325d83424c4416981dc44070a910f9be5a3013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
