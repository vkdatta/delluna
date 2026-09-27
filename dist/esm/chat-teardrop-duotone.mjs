export const name="chat-teardrop-duotone";
export const id="dl_d435696dc54545cbbd26";
export const url=new URL("../icons/chat-teardrop-duotone.svg?v=91bfcbd7703bec02e2505f23eb95324e0536c56d6bac16ecf00bd7e9ac59612a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
