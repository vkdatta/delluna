export const name="brackets-angle";
export const id="dl_5f0ccf38872d4d4b8948";
export const url=new URL("../icons/brackets-angle.svg?v=5ea36c49e774c7d0eb143528b5b92a01ef183ccef5a63f6e8558226d5cf5461c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
