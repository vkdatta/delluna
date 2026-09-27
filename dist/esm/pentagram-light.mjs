export const name="pentagram-light";
export const id="dl_5f84ed05208a41d498ae";
export const url=new URL("../icons/pentagram-light.svg?v=2190627cb97127f6861d8cabdd2eb19a8cffa67af7512391d0f4f9df02e32dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
