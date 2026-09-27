export const name="member-of";
export const id="dl_994ca90cca4b4a1cac2e";
export const url=new URL("../icons/member-of.svg?v=97e9dc83bfefe4941508d19edb7e8b3b53230f86a331071459613f9bf9639a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
