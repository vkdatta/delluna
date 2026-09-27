export const name="goodreads-logo-thin";
export const id="dl_79c04c8d4e7844bbb2b1";
export const url=new URL("../icons/goodreads-logo-thin.svg?v=738515049bb00a956d407c74f549976a2527dadac1bcdcb0a398d6803c28ccd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
