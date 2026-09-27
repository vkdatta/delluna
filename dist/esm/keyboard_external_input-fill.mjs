export const name="keyboard_external_input-fill";
export const id="dl_31bdbdc0bedf89299132";
export const url=new URL("../icons/keyboard_external_input-fill.svg?v=4d262b4aaea96a86075ab1104e1742e5bac1cec7b63a92fcada1be1598297fa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
