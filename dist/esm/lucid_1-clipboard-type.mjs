export const name="lucid_1-clipboard-type";
export const id="dl_9d6e3ec14e8d4949a1c4";
export const url=new URL("../icons/lucid_1-clipboard-type.svg?v=f51f614cd1b03b49410e48f46746ea625fe1796b2d02fd48f91158580ce586d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
