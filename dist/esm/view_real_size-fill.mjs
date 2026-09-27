export const name="view_real_size-fill";
export const id="dl_d381a14e474e9650e350";
export const url=new URL("../icons/view_real_size-fill.svg?v=89e759b48078b31393525f6faf8bba63c7a57376b88b6d56d46b98589af837be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
