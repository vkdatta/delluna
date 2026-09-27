export const name="unfold_less_double-fill";
export const id="dl_d6e15e34be9290f72b13";
export const url=new URL("../icons/unfold_less_double-fill.svg?v=cd36137f551dcec7484513f427116ec1d43b7e3d7e9bdbd677fa00b053fe5c45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
