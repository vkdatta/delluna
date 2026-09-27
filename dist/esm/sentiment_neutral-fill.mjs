export const name="sentiment_neutral-fill";
export const id="dl_cd8f7643891c0558c744";
export const url=new URL("../icons/sentiment_neutral-fill.svg?v=75d2917826b0decba605219aa82173383266f679b4df004c70b4164a0cc12c24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
