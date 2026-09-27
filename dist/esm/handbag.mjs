export const name="handbag";
export const id="dl_743422bfa95e46c2bfa8";
export const url=new URL("../icons/handbag.svg?v=ebe3be9ce8640ee787dc547d4b41eb0558410583dd783cd4f91f751eb24af7ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
