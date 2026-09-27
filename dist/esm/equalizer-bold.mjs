export const name="equalizer-bold";
export const id="dl_48dc58f41e024735bd30";
export const url=new URL("../icons/equalizer-bold.svg?v=9104d403b6da5f76f2efb1fcfb52878377536dac056934600a05dc852a340dcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
