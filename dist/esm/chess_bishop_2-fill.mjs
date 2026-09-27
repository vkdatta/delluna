export const name="chess_bishop_2-fill";
export const id="dl_697e8fe5571f940be94b";
export const url=new URL("../icons/chess_bishop_2-fill.svg?v=82331c59f7a4c4e1040a59ccb8304551b161b67dca6a1f31711043d83a04bc9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
