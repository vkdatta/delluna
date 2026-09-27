export const name="shuffle";
export const id="dl_3473c313f049b7c20eba";
export const url=new URL("../icons/shuffle.svg?v=e2967aff10b6b5176414ed14efb85259102bfff6d0b45c1ce187150d6073c93a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
