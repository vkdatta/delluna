export const name="arrow-bend-right-up-light";
export const id="dl_6194a7e37c8f410aaccb";
export const url=new URL("../icons/arrow-bend-right-up-light.svg?v=c3c13447508d9f845c52a2cd6fa60e6473e80975a01e1e175d6f46df76b028c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
