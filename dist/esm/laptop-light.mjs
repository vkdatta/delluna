export const name="laptop-light";
export const id="dl_6ff22c8ca106403b9b8a";
export const url=new URL("../icons/laptop-light.svg?v=847f3919047b4b1d784b03b367b93defc7dc9eee37f62527a8a08bb98c7322c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
