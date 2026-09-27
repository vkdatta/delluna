export const name="text-strikethrough-duotone";
export const id="dl_7a8ba16257616dc442b6";
export const url=new URL("../icons/text-strikethrough-duotone.svg?v=77430a881201e43c2bd68853df09ecdb3c4ec51538048ef3e7656d6227405585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
