export const name="read-cv-logo-thin";
export const id="dl_4b117b1dae9a4d57bb11";
export const url=new URL("../icons/read-cv-logo-thin.svg?v=86f54c0945504b3162e0fc872cd6b43c2c5d8005fadfcf19e8136a6def42e70b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
