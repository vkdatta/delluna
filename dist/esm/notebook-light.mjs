export const name="notebook-light";
export const id="dl_def21d63742a4d7c87ac";
export const url=new URL("../icons/notebook-light.svg?v=cd493b4b6b976dc45ee02b21dec4834e2a3cb872100c66f7b54c39aee1cf561a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
