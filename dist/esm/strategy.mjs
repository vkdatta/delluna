export const name="strategy";
export const id="dl_4942b2812c354b268c4d";
export const url=new URL("../icons/S/strategy.svg?v=f0fed12704dcfee4a2cce6ef6674fc0da69d6858f09ba55cfc09f1a068d77fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
