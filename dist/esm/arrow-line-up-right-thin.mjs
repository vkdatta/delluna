export const name="arrow-line-up-right-thin";
export const id="dl_a40a9c4618344ba988cc";
export const url=new URL("../icons/arrow-line-up-right-thin.svg?v=703393b7b8539aee4958ba191c7a82a96ec6a477fc129b492ef8e016a4515a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
