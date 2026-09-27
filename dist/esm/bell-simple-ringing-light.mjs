export const name="bell-simple-ringing-light";
export const id="dl_58cf7ae18044444a85dc";
export const url=new URL("../icons/bell-simple-ringing-light.svg?v=d2b6dfe6b037f0409bbe24dc9cdce11a27719b02a7086d1a126395c5225a284f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
