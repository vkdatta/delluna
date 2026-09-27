export const name="pedal_bike";
export const id="dl_84d9837e67866356d536";
export const url=new URL("../icons/pedal_bike.svg?v=6e351bdbc4f61195f4e0dbb3ff4ff8bba8ff20254b5f475c47e5001930d39939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
