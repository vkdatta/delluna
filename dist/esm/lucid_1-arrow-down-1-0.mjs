export const name="lucid_1-arrow-down-1-0";
export const id="dl_c6bd5e17ed764e6687a9";
export const url=new URL("../icons/lucid_1-arrow-down-1-0.svg?v=b477d92ad3f0b54c7dd0e6b4645103f97a7d5e8dfcb94e4732ac20689a9ab672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
