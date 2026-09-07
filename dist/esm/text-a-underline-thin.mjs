export const name="text-a-underline-thin";
export const id="dl_3bd5a208e39f46cf9cf9";
export const url=new URL("../icons/T/text-a-underline-thin.svg?v=b32bc5612bcc16589c619aa2795b165af195fa55772dd690bf2ca1fafb9ba406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
