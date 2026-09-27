export const name="next_week";
export const id="dl_235502a26571a9dd886f";
export const url=new URL("../icons/next_week.svg?v=38964bb331a0eeff2c2c41799c29983aacde1f036f883af0b51614d9c2cf8986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
