export const name="number-six";
export const id="dl_167840c292674ce9aa5b";
export const url=new URL("../icons/number-six.svg?v=fb0499f1ca835cd0ab04605a5983cffe3153c8a56046e28b973e511053f3a808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
