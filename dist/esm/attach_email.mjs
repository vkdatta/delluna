export const name="attach_email";
export const id="dl_ef972d12eae10681d7b8";
export const url=new URL("../icons/attach_email.svg?v=b41c2ed8074f5c09653b53fab806f83eac4b0124b26b9f4cce200d3516950bc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
