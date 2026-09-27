export const name="skype-logo-bold";
export const id="dl_5f9ac3311a19bd2c4a36";
export const url=new URL("../icons/skype-logo-bold.svg?v=8a5f0c4a3b20760127e687732d331553695824ae086d6caa592f9812a741ec06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
