export const name="circle-half-thin";
export const id="dl_e53dd17e34494918898d";
export const url=new URL("../icons/circle-half-thin.svg?v=7f44dc11064a33fcad6d9128825f98e1027c0ca527b762f68038bbb49c70f972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
