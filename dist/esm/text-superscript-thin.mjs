export const name="text-superscript-thin";
export const id="dl_388df88ea8c080bf7162";
export const url=new URL("../icons/text-superscript-thin.svg?v=3eac00f882e896f232087c0328c13217a5dcb7a3b1300ab41d3db0fc9e273c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
