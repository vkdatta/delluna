export const name="iframe_off";
export const id="dl_91b5f04cb20a46de89ca";
export const url=new URL("../icons/iframe_off.svg?v=a87abadec5f3189c98dd74fc9c358f28679ebdef01152affa4929b116e438dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
