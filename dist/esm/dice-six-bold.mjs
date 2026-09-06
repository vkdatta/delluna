export const name="dice-six-bold";
export const id="dl_ea2b0ab6afe8427c9d39";
export const url=new URL("../icons/dice-six-bold.svg?v=1a56996510c632d68fb03f473afd61fad06c0bb2d318de5467043c9bd51fc4c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
