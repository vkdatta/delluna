export const name="trash-thin";
export const id="dl_655965ada56b3ac73014";
export const url=new URL("../icons/trash-thin.svg?v=03708cbe1c7f40ddafdbaa482f5ea74c59abecbeaefc8ec4936199389699c22f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
