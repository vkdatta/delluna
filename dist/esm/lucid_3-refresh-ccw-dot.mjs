export const name="lucid_3-refresh-ccw-dot";
export const id="dl_2b1dfe63e14842f48530";
export const url=new URL("../icons/lucid_3-refresh-ccw-dot.svg?v=69a99046d0190d57d0d9c1280926d89e545f21f9f34ee43b5ccdfcd0b6654cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
