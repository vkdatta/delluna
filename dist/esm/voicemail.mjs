export const name="voicemail";
export const id="dl_7be181ec87394d82ac90";
export const url=new URL("../icons/voicemail.svg?v=00b16b7c6ad9207d7b583aec256a97b969248ee34f25745aac9677f3b3769f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
