export const name="snowmobile";
export const id="dl_7f9e2a1b2223e5c19ffb";
export const url=new URL("../icons/snowmobile.svg?v=f1c40cef29c3b5c2252ab87a32c477946aac72a5cfea23ddb35057e17499ef4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
