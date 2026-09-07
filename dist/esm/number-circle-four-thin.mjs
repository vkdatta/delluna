export const name="number-circle-four-thin";
export const id="dl_e1c70b34ee114bc392ee";
export const url=new URL("../icons/number-circle-four-thin.svg?v=c4cbeda722ed7d76209b2f4ea41dd3778f81c2d88edb85aeabd306dbcca6147c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
