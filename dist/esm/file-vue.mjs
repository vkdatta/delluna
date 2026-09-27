export const name="file-vue";
export const id="dl_61f6d5063d2e4dc68fe4";
export const url=new URL("../icons/file-vue.svg?v=15bc90ba5d30dd4832110b0eecb58f24596f57ffa3af8a1d3c83f85875fee87b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
