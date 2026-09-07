export const name="text-underline-thin";
export const id="dl_54107d83443f4c4b9778";
export const url=new URL("../icons/T/text-underline-thin.svg?v=5de702bedfb9266cac91e63805318734af97a8a698a6043d8faf912bee58ac5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
