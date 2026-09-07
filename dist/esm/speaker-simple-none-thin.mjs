export const name="speaker-simple-none-thin";
export const id="dl_76021e4ebc30437d9290";
export const url=new URL("../icons/S/speaker-simple-none-thin.svg?v=6598c606350575111bbf03b227d005fec2a986e473ba11c06cbc8be275b4fc8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
