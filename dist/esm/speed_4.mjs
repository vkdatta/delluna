export const name="speed_4";
export const id="dl_8c765634ac9faa53cea0";
export const url=new URL("../icons/speed_4.svg?v=b5e5f2d87b11bd02918bcc65f455b677f2305998d0c422ed6adaf8d80f311145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
