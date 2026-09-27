export const name="arrow-fat-line-right-thin";
export const id="dl_8fcf369b7b364a6dbf37";
export const url=new URL("../icons/arrow-fat-line-right-thin.svg?v=0b8abe13b24025048d25e9134adbae9b42de4a1c31efb7cde2d3732d77232fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
