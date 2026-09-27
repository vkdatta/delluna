export const name="arrow-circle-down-left-fill";
export const id="dl_20c7d10227ca487e8192";
export const url=new URL("../icons/arrow-circle-down-left-fill.svg?v=f445123506da10266269c0aa67347e4892cbb38c0cc0bcc2d00a8439eb7499cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
