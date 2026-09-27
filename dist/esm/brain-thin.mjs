export const name="brain-thin";
export const id="dl_ecfb825f0c46462eadf0";
export const url=new URL("../icons/brain-thin.svg?v=0a203ab8920e6a89918ba93c5080daf7793b214dbdd2922992e5dc5a85a5a089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
