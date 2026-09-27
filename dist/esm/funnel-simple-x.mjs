export const name="funnel-simple-x";
export const id="dl_2c7fb9d69f1b48569704";
export const url=new URL("../icons/funnel-simple-x.svg?v=bab4f5e8ee4a2168af03b1b179ba1b41ab97dd9ccb5067134f29387710fceb53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
