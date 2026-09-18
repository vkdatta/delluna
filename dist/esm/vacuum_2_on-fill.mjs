export const name="vacuum_2_on-fill";
export const id="dl_cc10ebe5b67c440d8eb2";
export const url=new URL("../icons/vacuum_2_on-fill.svg?v=d225b61088a585a4258fd1ff78069c4a195ce6fa66cbb5ed97bcef20a974ae22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
