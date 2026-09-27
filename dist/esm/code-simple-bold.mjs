export const name="code-simple-bold";
export const id="dl_f21b175e7d734c2dab08";
export const url=new URL("../icons/code-simple-bold.svg?v=a20cd7d1ac39538b32644447e60dfaea7e594b667e2fd3ac99bd1c9cbd76fe61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
