export const name="pentagram";
export const id="dl_6c606004cefc4d9092cb";
export const url=new URL("../icons/pentagram.svg?v=f65b04cce5213fea8cea0ef54e8b00893ab57ebca784fd85488cd994766e095f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
