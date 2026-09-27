export const name="chat-teardrop-duotone";
export const id="dl_d435696dc54545cbbd26";
export const url=new URL("../icons/chat-teardrop-duotone.svg?v=87daf1c34e97d6d3301c62adde3a19b42abe7020be851926810104228c3a77cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
