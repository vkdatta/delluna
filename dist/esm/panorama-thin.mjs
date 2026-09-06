export const name="panorama-thin";
export const id="dl_7b0bcf13f54f43d6aa68";
export const url=new URL("../icons/panorama-thin.svg?v=feac7eca858779d036551b91a773a856ef21731315d68191a1ed5665cb77d556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
