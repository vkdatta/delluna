export const name="chat-teardrop-thin";
export const id="dl_2ce421f425114fc098b7";
export const url=new URL("../icons/chat-teardrop-thin.svg?v=34566044cddbaedcaf11596617cdc7137c39f750c1818525b8844e4fa9ff758e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
