export const name="polygon-thin";
export const id="dl_ba06ee06efc247cf9a80";
export const url=new URL("../icons/polygon-thin.svg?v=7502fb33d4bc330e444be79f8360b3a3921c10df151851eb7525cba0363af3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
