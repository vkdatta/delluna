export const name="arrow-down-right-light";
export const id="dl_60093679caba4530b684";
export const url=new URL("../icons/arrow-down-right-light.svg?v=7df1989d51aba3aaa49988c1a0c1c2f6c6dad264c8269cb146bcb5fa567d528f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
