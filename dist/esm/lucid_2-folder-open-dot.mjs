export const name="lucid_2-folder-open-dot";
export const id="dl_8e4516a25fe848bba119";
export const url=new URL("../icons/lucid_2-folder-open-dot.svg?v=d94e04edca652f24a13e6a26ea586a06ad3108d8556111c00cc87da07a18026b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
