export const name="handbag-bold";
export const id="dl_8b4327530196404bb264";
export const url=new URL("../icons/handbag-bold.svg?v=b1cac33ce44c6790b90e39dc59dee9b84f8be754e7af24557f263e9e22f1554d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
