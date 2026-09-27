export const name="envelope-simple-bold";
export const id="dl_6b67ae8935984bc79e9a";
export const url=new URL("../icons/envelope-simple-bold.svg?v=73810f20e409d2d7ff9b341434fc1f5ea2f5d2635938ca4b73579fe50854a586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
