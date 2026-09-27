export const name="lucid_3-navigation";
export const id="dl_0bdea1773f4c47efb4ba";
export const url=new URL("../icons/lucid_3-navigation.svg?v=6044471ecbf9041da7d9c5eb50417f147d220959148c25598fb722280fc04a86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
