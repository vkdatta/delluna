export const name="x-square-duotone";
export const id="dl_5f6536386e01ee8a3ab3";
export const url=new URL("../icons/x-square-duotone.svg?v=c7421b9db36cddf33c804e3562463becb70de4b1ed90888cfc7d0fa75f944616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
