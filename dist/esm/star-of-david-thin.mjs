export const name="star-of-david-thin";
export const id="dl_1b465399b3f7a0b7a62a";
export const url=new URL("../icons/star-of-david-thin.svg?v=dbb5a47ac8dd6cf3e6b5c206bcce81da30970f42359504f5ddc13071424796f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
