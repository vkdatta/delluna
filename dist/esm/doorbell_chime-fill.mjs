export const name="doorbell_chime-fill";
export const id="dl_1a1c796335c350afc75c";
export const url=new URL("../icons/doorbell_chime-fill.svg?v=a67f6cda06a7abecd63f25d240a808fdeb9094963472799f1ef97614f40a37ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
