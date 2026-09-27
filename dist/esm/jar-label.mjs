export const name="jar-label";
export const id="dl_06f2da1196bf4edbb93d";
export const url=new URL("../icons/jar-label.svg?v=0bbc60594677b501f7f33f1c27c024c5deeafa833ff131444e901352acfee04e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
