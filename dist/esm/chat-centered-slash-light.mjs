export const name="chat-centered-slash-light";
export const id="dl_12e16e6ba8a3441bad33";
export const url=new URL("../icons/chat-centered-slash-light.svg?v=6ed59c544bbf10da0040a9fe24daa8dd6c229038ca0db8c1e4c0bb6489c6559c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
