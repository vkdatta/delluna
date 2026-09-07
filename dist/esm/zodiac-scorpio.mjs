export const name="zodiac-scorpio";
export const id="dl_971753d2637149188ca1";
export const url=new URL("../icons/zodiac-scorpio.svg?v=dc1ab8bb3d3594a3b8c1b8184df585823092e7e320cd95f756324e83e7522294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
