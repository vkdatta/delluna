export const name="flag-pennant-duotone";
export const id="dl_df93ca87da124f87a1eb";
export const url=new URL("../icons/flag-pennant-duotone.svg?v=b74cdfb0ca9a6b107f0f20b580c9f63d5acf1636d7483dbd4f95678eec98f5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
