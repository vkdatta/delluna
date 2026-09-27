export const name="nutrition";
export const id="dl_2b7adf551ad5da0f3e34";
export const url=new URL("../icons/nutrition.svg?v=2397256cdb7db447445bae303805a82fd450af2e58c66baa722f7504715ca1be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
