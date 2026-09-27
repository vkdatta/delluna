export const name="hands-clapping-bold";
export const id="dl_469d4411390441bb9152";
export const url=new URL("../icons/hands-clapping-bold.svg?v=f3543db9f9599e1d48b3e7cdd4d6b8f037fde5707c6775687d773878c94ab254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
