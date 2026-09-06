export const name="ranking";
export const id="dl_895ac177c571400c924d";
export const url=new URL("../icons/ranking.svg?v=250ce5bd66e3ad90ed9639734b46ea7edc6758874b2620eabde1c39f3a138350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
