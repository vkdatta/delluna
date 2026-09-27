export const name="text-superscript-duotone";
export const id="dl_62f0879547e82ebbc2a5";
export const url=new URL("../icons/text-superscript-duotone.svg?v=9f36f5fc01c20fc5fc1d3606b7a1b5fa28099690ea471fd1cbf55ca685f7b023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
