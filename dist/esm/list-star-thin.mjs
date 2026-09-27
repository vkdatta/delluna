export const name="list-star-thin";
export const id="dl_67098f8862fc40b8ba53";
export const url=new URL("../icons/list-star-thin.svg?v=19e64e2df7d84691e2b5f8989468423db9ada2ebf7e0992fbdc48cd569425ff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
