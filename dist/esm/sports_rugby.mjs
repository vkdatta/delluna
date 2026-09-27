export const name="sports_rugby";
export const id="dl_a8b368192b4194d94644";
export const url=new URL("../icons/sports_rugby.svg?v=510cd29ff98268007b1d90751bb7fa76ef9e1c466e0b3416bf144977cfde9bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
