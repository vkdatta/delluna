export const name="copyleft-bold";
export const id="dl_12e4aac573f84286a232";
export const url=new URL("../icons/copyleft-bold.svg?v=1ae77d56ef35307bbe416e6c0572595602d27505515053b753a170e2dd63e7e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
