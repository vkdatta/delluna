export const name="trackpad_input_2";
export const id="dl_280ee0547f8293f400ee";
export const url=new URL("../icons/trackpad_input_2.svg?v=cd707f16ba56227fe00fe0afab4488fa2641916223d68af5b41429d3514df2a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
