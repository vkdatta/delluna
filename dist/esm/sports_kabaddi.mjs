export const name="sports_kabaddi";
export const id="dl_5953b6ccbdcd7b826fc4";
export const url=new URL("../icons/sports_kabaddi.svg?v=0cbeb138cedb043c463039440ac5a22b244e79ceaa15036ce40ce50eb1d0d359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
