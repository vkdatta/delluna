export const name="sign_language-fill";
export const id="dl_05a96904a0b453660579";
export const url=new URL("../icons/sign_language-fill.svg?v=c8366732896a243374e48067b0512ed7cff6382cf7617e712ff92f3bcc89945e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
