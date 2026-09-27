export const name="terminal_2-fill";
export const id="dl_34caaf82ff20583302e8";
export const url=new URL("../icons/terminal_2-fill.svg?v=8de7265d19514d8392b482bbd6a11740319ac0e33ec902c680bccd89d2266d39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
