export const name="list-numbers";
export const id="dl_0707a65e88444558a9cb";
export const url=new URL("../icons/list-numbers.svg?v=fe27bfeb346c8ffd2ca61805d800f60c58b2cd0512e7d58f1b8ccffdad777ccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
