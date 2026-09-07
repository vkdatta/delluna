export const name="train-simple-light";
export const id="dl_6e464c01d35744f487fb";
export const url=new URL("../icons/T/train-simple-light.svg?v=83eb1c25b7b565cf8e9fa27cd092be938604cd0a7de018e8d5b96f7554e69d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
