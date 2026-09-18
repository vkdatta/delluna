export const name="sports_rugby";
export const id="dl_7324dc8a736842e8b219";
export const url=new URL("../icons/S/sports_rugby.svg?v=510cd29ff98268007b1d90751bb7fa76ef9e1c466e0b3416bf144977cfde9bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
