export const name="stack-minus-thin";
export const id="dl_0b3af5725e14ee43a69c";
export const url=new URL("../icons/stack-minus-thin.svg?v=2050e92912d31629f70a301eb5717f62ac571fc0cc47f7391a48bf8b19def554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
