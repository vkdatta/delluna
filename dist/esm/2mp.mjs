export const name="2mp";
export const id="dl_5277dbd2780ef4ff5ca8";
export const url=new URL("../icons/2mp.svg?v=73a259bce6d94edb064fb8ac722cc9165569c8b4f4063e429356c441f788235c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
