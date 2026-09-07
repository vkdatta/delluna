export const name="smiley-wink";
export const id="dl_124a2dcb206e4108a06d";
export const url=new URL("../icons/S/smiley-wink.svg?v=ff76de9b91334535d4a51122912a72cdfb52f4cff40070046be5a75e430bd2f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
