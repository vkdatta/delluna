export const name="emoji_nature-fill";
export const id="dl_d618a4e4ae659aa75cd6";
export const url=new URL("../icons/emoji_nature-fill.svg?v=4d09c2d45e7d936dd9d02a55af4ef2ead0301e9e2774d8f4538c6dfbd14191e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
