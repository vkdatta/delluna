export const name="oven";
export const id="dl_6ba215eef383411f8857";
export const url=new URL("../icons/oven.svg?v=eeec751d93c50e389849970be2099d86698ac66fc2ea8cb428f8f096ffe6055e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
