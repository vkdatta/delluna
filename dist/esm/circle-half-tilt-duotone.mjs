export const name="circle-half-tilt-duotone";
export const id="dl_ac37c0783034468581de";
export const url=new URL("../icons/circle-half-tilt-duotone.svg?v=e4cbcd7868db207754b6a5f034bb6375003b799a38e7ee10bce283e306312898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
