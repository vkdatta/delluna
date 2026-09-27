export const name="receipt-bold";
export const id="dl_b72ba72103484398b85a";
export const url=new URL("../icons/receipt-bold.svg?v=0096ba05d311c139c6538d271c339b8bd0624498a8a8b05da7c7964ae8515c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
