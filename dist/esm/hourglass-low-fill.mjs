export const name="hourglass-low-fill";
export const id="dl_16ebab0ed117468aa84d";
export const url=new URL("../icons/hourglass-low-fill.svg?v=bbec52c46ec20de7f6933afaf1bb6b280ca8e6f14ff841c2bade01fce6ca695b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
