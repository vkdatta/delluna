export const name="watch-thin";
export const id="dl_cac77506abc00bc21d39";
export const url=new URL("../icons/watch-thin.svg?v=30ecde7e8eef5a406b484198c9d42fb18930d9a67d5de3459ba416db18d7be4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
