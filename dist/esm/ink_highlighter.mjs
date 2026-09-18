export const name="ink_highlighter";
export const id="dl_fe2bb7dc961a468a92cc";
export const url=new URL("../icons/I/ink_highlighter.svg?v=9f7061f90c19ce553e6d8b1c7c078299a2e92f66be8d7787be3983485fc4d16c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
