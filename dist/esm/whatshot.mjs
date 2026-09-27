export const name="whatshot";
export const id="dl_8f2b660499611057a247";
export const url=new URL("../icons/whatshot.svg?v=d8406482c742a41678f4d51ccf0c756fa160c293d5ff30654bf66b9e8db575dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
