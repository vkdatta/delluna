export const name="panorama-thin";
export const id="dl_7b0bcf13f54f43d6aa68";
export const url=new URL("../icons/panorama-thin.svg?v=209fa0c80fee73fafdac984263732b26692b4cde61a8a023c2ffc0bca4bfabc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
