export const name="signal_cellular_alt";
export const id="dl_5c9dbe3326804b36b8fc";
export const url=new URL("../icons/signal_cellular_alt.svg?v=852e88373da8431dbe21843955cf214243c2b8ecb015060d5637b0466f51a854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
