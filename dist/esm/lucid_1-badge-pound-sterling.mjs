export const name="lucid_1-badge-pound-sterling";
export const id="dl_5d9e5fa09f5f4306bb28";
export const url=new URL("../icons/lucid_1-badge-pound-sterling.svg?v=501be7fbfde246d866f4c5bb9ee7b327a94528b25196a3a0c1080959d7166435",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
