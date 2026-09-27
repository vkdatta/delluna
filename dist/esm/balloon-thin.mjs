export const name="balloon-thin";
export const id="dl_cd4b4667c5d14787bb51";
export const url=new URL("../icons/balloon-thin.svg?v=f7c02e83bdad4fb4c432e05f3282680059da946d2e4341e4013c3c1860fb56d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
