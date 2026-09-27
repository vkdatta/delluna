export const name="sports_cricket-fill";
export const id="dl_702cad33a79d999945b9";
export const url=new URL("../icons/sports_cricket-fill.svg?v=812f38d30c96028ac275a5befed0c8219a752d5a11a024fad9152c77561d9ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
