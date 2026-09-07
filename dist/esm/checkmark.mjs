export const name="checkmark";
export const id="dl_58fc6c6752e04eb7a0b5";
export const url=new URL("../icons/checkmark.svg?v=21da4e9959c3ef7313517a60a53f1886db1030b0c7554d11b9227059894fbcf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
