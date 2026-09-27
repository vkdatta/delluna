export const name="basketball";
export const id="dl_c1c8a9a3b0264b5a93f1";
export const url=new URL("../icons/basketball.svg?v=4aabe90a7b06099555787d19bedf6366395029ab87e27852cc8dfa8c7365b2b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
