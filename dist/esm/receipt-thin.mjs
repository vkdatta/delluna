export const name="receipt-thin";
export const id="dl_61814b69cb5147bcbbea";
export const url=new URL("../icons/receipt-thin.svg?v=b855d1e5e1c6e4a66ad6dab4561a8074659c9a61a136e347cddce8fefad9600d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
