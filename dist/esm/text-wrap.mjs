export const name="text-wrap";
export const id="dl_2e3ffbe8126742b68aa3";
export const url=new URL("../icons/text-wrap.svg?v=8d90a9ec337db0b9faef3851be8762926482771065d6deffc7e631b1778382b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
