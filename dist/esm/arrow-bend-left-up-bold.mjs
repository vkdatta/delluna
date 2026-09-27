export const name="arrow-bend-left-up-bold";
export const id="dl_d20f53e8f1944035be45";
export const url=new URL("../icons/arrow-bend-left-up-bold.svg?v=44a43ef13b3ceb3b7b654782c9f26f6b050ed709438ba7fc8402a449676e5c4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
