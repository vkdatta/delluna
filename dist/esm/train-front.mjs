export const name="train-front";
export const id="dl_c80a97aaa8d14433953c";
export const url=new URL("../icons/train-front.svg?v=3c3f46e496e944b6f78e72091014f8f75554e9dfd44eca2747cfd2fb6c2363bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
