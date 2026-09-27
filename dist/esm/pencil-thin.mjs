export const name="pencil-thin";
export const id="dl_27aa7ee378434118a1ee";
export const url=new URL("../icons/pencil-thin.svg?v=cc1278b4a7db2797c8affaae7f25ac311ac50491411581cafe7b12645016bfe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
