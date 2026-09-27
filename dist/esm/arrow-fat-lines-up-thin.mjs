export const name="arrow-fat-lines-up-thin";
export const id="dl_442c71a6c76b480a8947";
export const url=new URL("../icons/arrow-fat-lines-up-thin.svg?v=a5baf09cb02bd0522cad06c31e3268af1b0d5eb104825a23372a3cfe151993b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
