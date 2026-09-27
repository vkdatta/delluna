export const name="text-h-four-bold";
export const id="dl_6ea3e48315cf0c586cf8";
export const url=new URL("../icons/text-h-four-bold.svg?v=7f06637ba8fc2fc1c44fa6bf7be86a721207d288fc45b651901618e42b042925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
