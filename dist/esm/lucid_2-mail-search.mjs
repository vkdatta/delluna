export const name="lucid_2-mail-search";
export const id="dl_abcee0f47c4e4a0196b4";
export const url=new URL("../icons/lucid_2-mail-search.svg?v=8dcd711a9ee9789a219135933bd165470d99faff7732cd849df9debf9c98cf11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
