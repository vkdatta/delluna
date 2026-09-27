export const name="home_pin";
export const id="dl_7a74b5805db1507a5416";
export const url=new URL("../icons/home_pin.svg?v=dc03f3872ee7558cc9f51ede31f7166ea9b3826aea1d053309c28bd47280c5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
