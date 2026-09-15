export const name="bloodtype";
export const id="dl_2cf0eb1fca0c42f4af4e";
export const url=new URL("../icons/B/bloodtype.svg?v=4134c86f2f048ce98f42e4d684e1511ad057651d169e34afd23cfb8b5981c510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
