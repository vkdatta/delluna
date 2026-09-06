export const name="cash-register";
export const id="dl_ce7506fe0cca4ed8b6dd";
export const url=new URL("../icons/cash-register.svg?v=864a2c6aa0963179e612aba4be13b334136cf593abd4181bd61984478eab4699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
