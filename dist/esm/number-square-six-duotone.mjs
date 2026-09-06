export const name="number-square-six-duotone";
export const id="dl_c6f3119cb1984b03828d";
export const url=new URL("../icons/number-square-six-duotone.svg?v=b53065f89880f21f8b4dc042d78792ac4dabd7961a2d310dc3e88e44efbdd40f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
