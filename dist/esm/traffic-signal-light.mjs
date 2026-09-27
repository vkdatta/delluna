export const name="traffic-signal-light";
export const id="dl_b181d69b16e74f3591cd";
export const url=new URL("../icons/traffic-signal-light.svg?v=c6f831dc8591d1ad525b4e9ba24027d1a080029f92ffa06681ca750fa313a0e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
