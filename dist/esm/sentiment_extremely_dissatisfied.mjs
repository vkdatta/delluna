export const name="sentiment_extremely_dissatisfied";
export const id="dl_945ea552af1b005a8748";
export const url=new URL("../icons/sentiment_extremely_dissatisfied.svg?v=b0258a4f94aa2c6fb9bf888afe21ecc1f77f5ddf002a3057b1bfc57c53e8862b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
