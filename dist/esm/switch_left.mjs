export const name="switch_left";
export const id="dl_95b7e280f1184cf04535";
export const url=new URL("../icons/switch_left.svg?v=c8bff8f67615aeaba53894a23eecfa2946db31094637681dd45a2a7ed82fe4a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
