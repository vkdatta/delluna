export const name="tv_next-fill";
export const id="dl_3ea7452c356be1004203";
export const url=new URL("../icons/tv_next-fill.svg?v=4766671622844d44c21e5dec0e78c760fd41e9c60791550184a0a9253f289c2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
