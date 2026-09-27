export const name="egg-crack-light";
export const id="dl_0173d482496342edb0f0";
export const url=new URL("../icons/egg-crack-light.svg?v=b71308a20ec6e3b4da9456d7865ac38c65a753dabe9293603c72e70f66c67011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
