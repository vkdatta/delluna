export const name="child_hat";
export const id="dl_ad0c48bcc42e449f2663";
export const url=new URL("../icons/child_hat.svg?v=6054e1917312bf1b53840cd590ad505cc21f5c731dd770ca40250d62f14350c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
