export const name="barefoot";
export const id="dl_3a8729f9f06847faaa15";
export const url=new URL("../icons/barefoot.svg?v=26b9b1825f987c02156734a808dab6b7863202b9b4a13a20ea5c19bec001ca50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
