export const name="face-mask-bold";
export const id="dl_44097ed78571469ba883";
export const url=new URL("../icons/face-mask-bold.svg?v=70fffd466ff270ac8126f5f620bf857d17e956c8ba0ddef7c81b7a1ebebf25c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
