export const name="location_searching-fill";
export const id="dl_0c566f306820d18c5d23";
export const url=new URL("../icons/location_searching-fill.svg?v=555623b35b6c7b56a899c724a00a2e6c820e73453d7a4cba1793b7867717ed6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
