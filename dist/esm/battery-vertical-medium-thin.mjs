export const name="battery-vertical-medium-thin";
export const id="dl_051f5750e48340a8a448";
export const url=new URL("../icons/battery-vertical-medium-thin.svg?v=8f6d6dcd21618f239490ef6e98bd0402559c72f451b538d70b3cab659eb82888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
