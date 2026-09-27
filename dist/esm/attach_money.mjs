export const name="attach_money";
export const id="dl_a1547edd4617fd6bbdba";
export const url=new URL("../icons/attach_money.svg?v=2073acce46ff72fc72d8bbbc3c2c541f4ee300e2656c34903fc575d16d370128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
