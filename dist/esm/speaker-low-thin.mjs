export const name="speaker-low-thin";
export const id="dl_ba4e0d6aa699424a8041";
export const url=new URL("../icons/S/speaker-low-thin.svg?v=0f9310f16d779c75496dfd1c16e1a5518e1279f3b8308f9dc0642810d8054140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
