export const name="envelope-thin";
export const id="dl_7824c9e0f2b24ceab1e4";
export const url=new URL("../icons/envelope-thin.svg?v=29dd430df4b221386e1e4884a3f9e8496f9edc05feacd4314fe0e488dad679f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
