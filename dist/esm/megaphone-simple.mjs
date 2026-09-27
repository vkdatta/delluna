export const name="megaphone-simple";
export const id="dl_a95ab245521345a482c4";
export const url=new URL("../icons/megaphone-simple.svg?v=43aeb962873043d28badc8bb53ed464b14721f3c3664e45d1e1f27c246c297ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
