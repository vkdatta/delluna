export const name="bluetooth-slash-bold";
export const id="dl_c91da3311d664601ab31";
export const url=new URL("../icons/bluetooth-slash-bold.svg?v=44596c6926d908f749e8c8646420487c515526921cf1201ef0e1515fe6e12d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
