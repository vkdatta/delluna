export const name="racquet-thin";
export const id="dl_29edecd31ddc46758df2";
export const url=new URL("../icons/racquet-thin.svg?v=18d1dd08708df9c1e4a5160eb5410122647fe9a657e8423c6f4f123f102913bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
