export const name="telegram-logo";
export const id="dl_e38c21101f50455aa7b9";
export const url=new URL("../icons/T/telegram-logo.svg?v=51609636271d673485371b29f9cc18d39072cecba8c5a89d95a9dcc9c17d9b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
