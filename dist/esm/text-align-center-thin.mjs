export const name="text-align-center-thin";
export const id="dl_b6a9bc1d41ceeb6c41e9";
export const url=new URL("../icons/text-align-center-thin.svg?v=828b6632393ff375062e0efd7a0867cba6b234a5f410392c115a983386e83646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
