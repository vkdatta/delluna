export const name="ladder-simple-light";
export const id="dl_1ded6f1878ee49e08ed9";
export const url=new URL("../icons/ladder-simple-light.svg?v=362c415e81f40744f0cee172033f99eb4036e0aa6051b3ea2664110e30ac4553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
