export const name="for_you";
export const id="dl_aa4b78ff430c40968162";
export const url=new URL("../icons/for_you.svg?v=8d095cebc4b154d10038fd4badb512b7c4974b33dc37293a1a65733be6b3e001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
