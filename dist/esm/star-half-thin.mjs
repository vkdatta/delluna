export const name="star-half-thin";
export const id="dl_85f619a1ec3175a17e7a";
export const url=new URL("../icons/star-half-thin.svg?v=160bb8ad0016d6d2ecd8619372dbc0c7b92a57417bb08a1b11d72c620c22c6c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
