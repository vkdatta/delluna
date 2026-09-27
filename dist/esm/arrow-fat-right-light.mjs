export const name="arrow-fat-right-light";
export const id="dl_7157aa55d36949058445";
export const url=new URL("../icons/arrow-fat-right-light.svg?v=70ff40f2afec2f2c6037b858cb46a0873574cca302b06b981c6d5e503b56df90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
