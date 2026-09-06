export const name="lucid_3-mic-vocal";
export const id="dl_4468c680e4d646b38859";
export const url=new URL("../icons/lucid_3-mic-vocal.svg?v=0d0c2acec475bb2968d3c82dd7b1f375f525ec8653324f03ec6dd5e98ab7823c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
