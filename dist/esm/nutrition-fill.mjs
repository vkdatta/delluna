export const name="nutrition-fill";
export const id="dl_9cae77c622ee4cab88dd";
export const url=new URL("../icons/nutrition-fill.svg?v=a8ad4aa7b9640e5bca5fd5ca26ec63eba89c659400f7923b1ae2411d5e72a71e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
