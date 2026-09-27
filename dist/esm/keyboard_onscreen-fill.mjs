export const name="keyboard_onscreen-fill";
export const id="dl_238b9d783c1d8193c54d";
export const url=new URL("../icons/keyboard_onscreen-fill.svg?v=4d3a48186ec2e09d12cde91a603b9003155de6a9d91729f4dcb673950a3fcc3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
