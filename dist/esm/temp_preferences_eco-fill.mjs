export const name="temp_preferences_eco-fill";
export const id="dl_8f4b2a05209d6576851c";
export const url=new URL("../icons/temp_preferences_eco-fill.svg?v=0716b344fc3a8578cf1a2c39d4ea2a5fbe046fb9d6037dbee152921ff6f4c382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
