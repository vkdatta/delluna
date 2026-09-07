export const name="key-return-bold";
export const id="dl_ad0d08908a0c4ae9a359";
export const url=new URL("../icons/key-return-bold.svg?v=ac6eb1bb6ad41fa50c4ed4bd75540aa7473600aacf85f3be09559d23032e1fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
