export const name="sneaker-fill";
export const id="dl_9cef3d7b7b1d4239958e";
export const url=new URL("../icons/S/sneaker-fill.svg?v=bb81cbd06a19f316c59046bb65d5778aef24869ed4c36682fff64fab2edf0dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
