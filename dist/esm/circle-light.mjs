export const name="circle-light";
export const id="dl_558edb11352c468fa080";
export const url=new URL("../icons/circle-light.svg?v=bb09e2539fc65394760823bb12a06f3bd0d63afaad5b9fb5cb9037eed09ad10e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
