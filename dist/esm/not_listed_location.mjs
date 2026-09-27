export const name="not_listed_location";
export const id="dl_7f423dbe85f0406a6a24";
export const url=new URL("../icons/not_listed_location.svg?v=fa6ad03d003f6989e799bf09eb68e649bccd8ae269152c9bf6fbcdaa554cb535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
