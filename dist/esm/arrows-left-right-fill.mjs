export const name="arrows-left-right-fill";
export const id="dl_4a8a2dab52984b1f924b";
export const url=new URL("../icons/arrows-left-right-fill.svg?v=50016fc97b7f93c542d9e780c8d709c9873980a20935130499b1ab842364ae79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
