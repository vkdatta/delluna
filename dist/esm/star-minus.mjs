export const name="star-minus";
export const id="dl_2f6c318776704efc8630";
export const url=new URL("../icons/star-minus.svg?v=87df09df910987dc05bcf0007d4e2da04b875a2cd005d91dbfae20c181e82c3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
