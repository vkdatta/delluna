export const name="steps-thin";
export const id="dl_ff9ab2fa1901e0af5613";
export const url=new URL("../icons/steps-thin.svg?v=3c86ad60206be418e6c94ea3dbdd01423c2d618cea570208da97d3c8d99eb251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
