export const name="arrow-left";
export const id="dl_9d9b8d4d5cca47ab8649";
export const url=new URL("../icons/arrow-left.svg?v=212789357fc6251e47612bf144d6bef9af03de59f86e5e70ea06d79a54661f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
