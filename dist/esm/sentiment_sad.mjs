export const name="sentiment_sad";
export const id="dl_4def302ec8c36b2fe53e";
export const url=new URL("../icons/sentiment_sad.svg?v=081dd7e5eede791bb2dbfcaf2662cbee5132648d72253ff53033135472c3cd21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
