export const name="y_circle";
export const id="dl_129f9049d71045d5a65e";
export const url=new URL("../icons/Y/y_circle.svg?v=a7e9d803a331ff61b6d4feae9b4b65fea7ed9e6a950c0193a4bc91d6fd0e8adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
