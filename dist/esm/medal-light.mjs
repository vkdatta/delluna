export const name="medal-light";
export const id="dl_af4ebc554ff94dc2afc2";
export const url=new URL("../icons/medal-light.svg?v=05e933539fe8abc982f64b6b178b56089dcffaeef068627352bc5ce29da0af48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
