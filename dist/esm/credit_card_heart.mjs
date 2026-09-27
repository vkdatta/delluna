export const name="credit_card_heart";
export const id="dl_91897df50941ba59643c";
export const url=new URL("../icons/credit_card_heart.svg?v=b5f0492dd26112f4c0bddb66212ef6f87f5ab1b17e718a7384a739cd0e16aae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
