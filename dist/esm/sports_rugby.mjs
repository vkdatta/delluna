export const name="sports_rugby";
export const id="dl_b0f3be76e8c0ff0ef343";
export const url=new URL("../icons/sports_rugby.svg?v=9c950c16d0f3b512017d2a31a9530eb9430dc68e5f448102a9ff636e6de1163e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
