export const name="unite-square";
export const id="dl_5dfe90b5b39b5ad48e2c";
export const url=new URL("../icons/unite-square.svg?v=50df0b0b49295b42ce46f7265236c2ba80a38cae5b8f98fb4eba5594892b5411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
