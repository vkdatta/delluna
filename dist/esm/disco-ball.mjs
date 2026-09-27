export const name="disco-ball";
export const id="dl_d59f536c3a5d4263bd93";
export const url=new URL("../icons/disco-ball.svg?v=31ab98e19f89c41ed8059fff355a439153dd449d51e23476e5c176805f938884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
