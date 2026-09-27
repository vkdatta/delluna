export const name="steps";
export const id="dl_3a7c3a8403bc0a8b4a49";
export const url=new URL("../icons/steps.svg?v=6f0908286a53eb4cac09f2a2afe1027986992e6ed32ef985048a2a194fe404ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
