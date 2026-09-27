export const name="hourglass-simple-thin";
export const id="dl_4bc2ebdd14fe498dbd9f";
export const url=new URL("../icons/hourglass-simple-thin.svg?v=d682c2b5d494fcda5dfe8328f34774a273e46c409051681dcd5c8f5045f886b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
