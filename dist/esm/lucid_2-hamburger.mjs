export const name="lucid_2-hamburger";
export const id="dl_69181a2999ae450ba230";
export const url=new URL("../icons/lucid_2-hamburger.svg?v=50a394ff803ad8f76bb304547ea4e326fbefe9d27d6edd7bcba232515e7e9544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
