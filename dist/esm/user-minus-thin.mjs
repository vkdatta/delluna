export const name="user-minus-thin";
export const id="dl_6d8381606a12a91a6c94";
export const url=new URL("../icons/user-minus-thin.svg?v=c02d59130a96d0526aabff9060d1c0563b830f8de0e62e19bd1581964c07f194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
