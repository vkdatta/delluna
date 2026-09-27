export const name="number-two";
export const id="dl_7f9c38c9f78043768fee";
export const url=new URL("../icons/number-two.svg?v=cfd473e63364eeaf9c78bf1e175dc1164fabb706e76be9abff80cb1d9660a76b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
