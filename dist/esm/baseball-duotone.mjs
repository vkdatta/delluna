export const name="baseball-duotone";
export const id="dl_d1d91458247e45a4aa7f";
export const url=new URL("../icons/baseball-duotone.svg?v=4735c725170fb8c015739472568203ad721b498a6310e22441adfd93989a7014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
