export const name="mystery";
export const id="dl_934c52dc1f700186d371";
export const url=new URL("../icons/mystery.svg?v=743cea605616e4695826963d6813d8c244b9ab0a8849bd074ff74ca7407254b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
