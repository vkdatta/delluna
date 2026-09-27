export const name="pets-fill";
export const id="dl_bd9e0084624fabf95c29";
export const url=new URL("../icons/pets-fill.svg?v=99e042fa26c412d1ba3f21f67fbdfa016145fe64fae8e2c2dd7557ed89c7c3f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
