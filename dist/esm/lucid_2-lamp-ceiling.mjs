export const name="lucid_2-lamp-ceiling";
export const id="dl_74bcf9b73a1146d8b55b";
export const url=new URL("../icons/lucid_2-lamp-ceiling.svg?v=cb8b3c5d370a6ae3582a751f030e8b5dea3eb84180aa1f2e42dd16544d9db35c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
