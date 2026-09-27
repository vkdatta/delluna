export const name="umbrella";
export const id="dl_267cc0ff6bca438eb6ef";
export const url=new URL("../icons/umbrella.svg?v=719a66af8cfff8bf426552ef933ee6077ea00105a7c75a041e7b0e464cd095af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
