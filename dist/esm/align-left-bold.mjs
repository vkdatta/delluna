export const name="align-left-bold";
export const id="dl_a5e8f3742f7b4f1daa82";
export const url=new URL("../icons/align-left-bold.svg?v=6fc1ec9d05e96893017558680f2cb13bddad2ac7ba996264e45e7828a33716e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
