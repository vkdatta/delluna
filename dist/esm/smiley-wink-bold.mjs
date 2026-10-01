export const name="smiley-wink-bold";
export const id="dl_6b6eca1566449a40e84b";
export const url=new URL("../icons/smiley-wink-bold.svg?v=eb06fe811a602da55ba1d708d293ca1ca7dacde6e8f6f20063fee2f007a277e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
