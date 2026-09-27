export const name="palette";
export const id="dl_dd02e1b251814487a78c";
export const url=new URL("../icons/palette.svg?v=010ec78262ed7b9a59f9e9ff12074383a38934835389091c5048c1f495d3a0e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
