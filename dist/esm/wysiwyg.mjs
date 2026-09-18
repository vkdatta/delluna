export const name="wysiwyg";
export const id="dl_d6de7976730648449f27";
export const url=new URL("../icons/wysiwyg.svg?v=3384b8740624ab3e8544a30b3d6043a52fa82c75540e862f159f0d3110e758a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
