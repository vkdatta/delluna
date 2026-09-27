export const name="text-h";
export const id="dl_dee2bba643a0700d4056";
export const url=new URL("../icons/text-h.svg?v=fce32907663c8a784d71f1f99f762e0ae4134401ac4c1b49668cee9c0f3a57d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
