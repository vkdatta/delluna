export const name="plus-minus-thin";
export const id="dl_405ea47e876d461cb7b0";
export const url=new URL("../icons/plus-minus-thin.svg?v=df3b777b733310376812bc2121a4675a3098fc2c37b235375bd9cba0ef55307d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
