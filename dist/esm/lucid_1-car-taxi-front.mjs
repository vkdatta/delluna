export const name="lucid_1-car-taxi-front";
export const id="dl_5b980de3ac9147c799c4";
export const url=new URL("../icons/lucid_1-car-taxi-front.svg?v=2a45336ab1b2a24c0ef9f27f3481dffa799e8814025e70662cfbdaac6e66b122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
