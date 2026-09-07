export const name="receipt-bold";
export const id="dl_b72ba72103484398b85a";
export const url=new URL("../icons/receipt-bold.svg?v=9c38cc02f31be0bac0ae4c67a85c5b25460c0b9462dd02a6a8af079fe9317a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
