export const name="text-strikethrough";
export const id="dl_8b94df9d80b149f1a334";
export const url=new URL("../icons/T/text-strikethrough.svg?v=fc8021134eba2374f4b404b9d2a351ac04864d2441aef8da5142f27f8f82d7b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
