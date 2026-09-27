export const name="equalizer-bold";
export const id="dl_48dc58f41e024735bd30";
export const url=new URL("../icons/equalizer-bold.svg?v=b3ef0ea5d608651589318cec663c7006ce8ae07331ee51a3a901d9e85da86fed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
