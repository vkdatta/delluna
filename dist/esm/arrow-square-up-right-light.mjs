export const name="arrow-square-up-right-light";
export const id="dl_7c1d4924be9e4f8ba09f";
export const url=new URL("../icons/arrow-square-up-right-light.svg?v=f17a81b506f10fe1103c996a693ee72b6a4b51deba604a6eb95fa8ab89fa1c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
