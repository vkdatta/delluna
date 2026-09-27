export const name="whatsapp-logo-bold";
export const id="dl_f3f6aeb469facd2754a4";
export const url=new URL("../icons/whatsapp-logo-bold.svg?v=b5587aac8484380a7a0c655807668273ac9d2abf17edef324c80a228d14df6e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
