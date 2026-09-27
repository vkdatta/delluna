export const name="speaker-none";
export const id="dl_91bbb943dd093401a4ee";
export const url=new URL("../icons/speaker-none.svg?v=724012f575f4dc59233a68f042cb3c57506b523c14df1f74771f0e410cb4569c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
