export const name="synagogue-bold";
export const id="dl_8ad7ade82284e61f4b7f";
export const url=new URL("../icons/synagogue-bold.svg?v=7514c0577fb391199e3f3a8ccbdfab8105555641449e5bc78725652379b4279f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
