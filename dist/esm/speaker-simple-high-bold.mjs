export const name="speaker-simple-high-bold";
export const id="dl_0c6cd644892d7c2ef10d";
export const url=new URL("../icons/speaker-simple-high-bold.svg?v=ff4266a721a30c2771bd70956a8635a2161a38c7ec9a15a0e3948dc3cbb40643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
