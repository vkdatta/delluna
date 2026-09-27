export const name="payment_arrow_down";
export const id="dl_6043809fbd83e69cad0c";
export const url=new URL("../icons/payment_arrow_down.svg?v=f424124c99acf5cca5cc786b22206348b1d3f8e9de5a44334ad0a20ca965c490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
