export const name="arrows-vertical";
export const id="dl_b4d89d8c7b454eb3ae48";
export const url=new URL("../icons/arrows-vertical.svg?v=986995d65122f130dac1f37d9b07bce44ec132301a0d4795c7765edeb6785ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
