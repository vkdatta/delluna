export const name="chat-circle-dots";
export const id="dl_a1930a1e437241ceb7cf";
export const url=new URL("../icons/chat-circle-dots.svg?v=2af44e36757c90c999e070065ae61c495c66c8e88f43c5f07964dc3367cad60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
