export const name="tree-view-light";
export const id="dl_e714e7fd1d80d09a9449";
export const url=new URL("../icons/tree-view-light.svg?v=21cac84d6ccfd82336f08a642da3a15e5c0b0a486b9807bf9025babafc25d43c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
